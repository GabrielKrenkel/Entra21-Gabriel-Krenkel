// 2) Crie um script que leia o arquivo exercioNomes.txt e mostra todos os nomes que começam com a letra A
// presentes no arquivo.

const os = require('os');
const fsPromises = require("fs/promises");
const path = require("path");

(async () => {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));

        let vNames = data.toString("utf-8")

        let list = vNames.split(os.EOL)

        let nameA = [],
            nameB = [],
            nameC = [],
            nameD = []

        for (const name of list) {
            let ver = name.split("")

            if(ver[0] == "A"){
                nameA.push(name)
            }

            if(ver[0] == "B"){
                nameB.push(name)
            }

            if(ver[0] == "C"){
                nameC.push(name)
            }
            
            if(ver[0] == "D"){
                nameD.push(name)
            }
        }

        console.log(` Nomes com A: ${nameA}\n Nomes com B: ${nameB} \n Nomes com C: ${nameC} \n Nomes com D: ${nameD}`);

    } catch (err) {
        console.log(err.message);
    }
})();