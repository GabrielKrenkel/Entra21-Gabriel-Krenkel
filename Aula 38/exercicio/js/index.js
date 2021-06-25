let quantidade = document.querySelector(".quantidade")
let item = document.querySelector(".item")
let adicionar = document.querySelector("#adicionar")

adicionar.addEventListener("click", (event)  => {
    if (quantidade === 0) {
        quantidade = 1
    }
    verificar()
    
})

function verificar() {
    for (let itemVerificar of item) {
        
    }
}