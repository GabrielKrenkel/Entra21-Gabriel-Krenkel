const { DataTypes, UUID } = require("sequelize");
const { hashSync,compareSync } = require("bcrypt");
const sequelize =  require("../database");
const { Sequelize } = require("../database");

const usuario = sequelize.define("Usuario", {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("senha", hashSync(value, 10))
        }
    }
});

// }, {
//     tableName: "usuarios",
//     underscored: true
// });

(async () => {
    try {
        await usuario.sync({ force: true });
        console.log('Tabela criada com sucesso!');

        // await sequelize.sync({ force: true })

        // const pedro = await usuario.create({
        //     nome: 'pedro',
        //     email: 'pedro@email.com',
        //     senha: '123456'
        // })
        // console.log("Usuario cadastrado com sucesso!!");
        // console.log(pedro.toJSON());

        // //Editando pedro
        // pedro.email = 'pedrao@email.com'
        // await pedro.save()
        // console.log("email alterado");

        // //Removendo pedro
        // await pedro.destroy()
        // console.log("Pedro destruido");

        //Inserindo varios registros

        const usuarios = await usuario.bulkCreate([
            {
                nome: "pedro",
                email: "pedro@email.com",
                senha: "123456"
            },
            {
                nome: "Joao",
                email: "joao@email.com",
                senha: "123456"

            }
        ])
        console.log("Usuarios inseridos com sucesso!!");
        
        usuarios.forEach(usuario => console.log(usuario.toJSON()))

        //Comparando a senha
        console.log(compareSync("123456", usuarios[0].toJSON().senha));

    } catch (error) {

        console.error("Ocorreu algum erro ao criar a tabela", error)
    }finally {
        
        sequelize.close()
    }
    
})();