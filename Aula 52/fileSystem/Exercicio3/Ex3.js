// 3) Crie uma função getUserByName(name) que retorne o usuário obtido através do arquivo "users.json". Caso o usuário
// não exista a função deve retornar undefined.
const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");



async function getUserByName(name) {
    
    try {
        const stats = await fsPromises.readFile(path.resolve(__dirname, "users.json"));

        let users = JSON.parse(stats.toString("utf-8"))

        let user = users.find(user => (user.nome === name))

        return user

    } catch (err) {

        console.log(err.message);
    }
    
}

(async () => {
    
    let user = await getUserByName("João")

    if (user) {
        
        console.log(`Usuário encontrado:\nnome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);
    }else {
        console.log("Usuário não foi encontrado!");
    }
})()