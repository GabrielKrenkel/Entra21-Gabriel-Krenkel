// Exercício:

// 1. Crie um script que irá salvar as informações de memória a cada 5 segundos em um arquivo chamado log.txt

// As informações devem ser salvas no seguinte formato:
// {"total_memory":"xx MB", "free_memory":"xx MB", "usage":"xx %"}

// Onde:
//     * total_memory: Quantidade total de memória.
//     * free_memory: Quantidade de memória livre.
//     * usage: Porcentagem de uso da memória.

const os = require('os');
const fsPromises = require("fs/promises");
const path = require("path");

setInterval(async () => {

    let maxMem = parseInt(os.totalmem() / 1024 / 1024)

    let freeMem = parseInt(os.freemem() / 1024 / 1024)

    let porcentagem = parseInt((freeMem * 100) / maxMem)

    console.log(porcentagem);

    const content = {
        free_memory : `${freeMem} MB`,
        max_Memory : `${maxMem} MB`,
        Porcentagem : `${porcentagem}%`
    }

    let contentForJSON = JSON.stringify(content) + os.EOL
    
    try {
        fsPromises.writeFile(path.resolve(__dirname, "log.txt"), contentForJSON);
        console.log("O arquivo log.txt foi criado com sucesso!");
    } catch(err) {
        console.log(err.message);
    }

}, 5000)
