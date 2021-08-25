require("dotenv").config;
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const { User, Refreshtoken } = require("./models")

const CLIENT_ID = "218689582967-qf12mgjtuc4slestkmnpn5uabcfkl7cg.apps.googleusercontent.com";

const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(CLIENT_ID);

app.use(express.json());
app.use(cors());

app.post("/login-google", async (req, res) => {
    try {
        const { token } = req.body;

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID
        });

        const payload = ticket.getPayload();


        const { email, name } = payload;

        const [user] = await User.findOrCreate({
            where: { email: email },
            defaults: {
                name: name
            }

        });

        
        // Retornar o access-token { sub: userID }
        const tokenAcess = jwt.sign({ sub: user.email }, process.env.TOKEN_SECRET, {
            expiresIn: "1d"
        });

        const expiresIn = Date.now() + 86400000 * 30;

        // Emitindo o refresh-token
        const refreshToken = jwt.sign({ sub: user.email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn
        });

        const [dbRefreshToken, created] = await Refreshtoken.findOrCreate({
            where: {
                user_email:  user.email 
            },
            defaults: {
                token: refreshToken,
                expireses_in: expiresIn
            }
        })


        if (!created) {
            dbRefreshToken.token = refreshToken;
            dbRefreshToken.expireses_in = expiresIn;



            await dbRefreshToken.save();
        }

        res.json({tokenAcess, refreshToken})

    } catch (error) {
        console.log(error);
    }
});

app.post("/users", )

app.listen(PORT, () => console.log("Servidor tá UP!"));

