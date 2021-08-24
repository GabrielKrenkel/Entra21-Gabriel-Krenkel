require("dotenv").config;
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

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
    
        const userid = payload['sub'];    
        

    } catch (error) {
        console.log(error);
    }    
});

app.listen(PORT, () => console.log("Servidor tá UP!"));

