const { sequelize, Usuario } = require("./db/models");

(async () => {

    try {
    
        await sequelize.sync({ force: true })
        
        await sequelize.authenticate(); 
        console.log("Autenticação feita com sucesso!");

       const pedro = await Usuario.create({
           nome: "Pedro",
           email: "pedro@email.com",
           senha: "123456"
       }); 
       console.log("Usuario cadastrado com sucesso!!");

     await pedro.createEndereco({
         rua: "Rua 1",
         numero: 123
     })
     console.log("Endereço criado com sucesso!!");

     await pedro.createProjeto({
         nome: "Projeto 01",
         quantidadeHoras: 10
     })
     console.log("Projeto criado com sucesso!!");
     
    } catch (error) {
        console.error("Error", error);
    } finally {
        sequelize.close();
    }
})();