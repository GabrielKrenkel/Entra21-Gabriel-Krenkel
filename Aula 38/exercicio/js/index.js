let adicionar = document.querySelector("#adicionar")

let excluir = document.querySelector("#excluir")

let qtdExcluir = document.querySelector(".qtd-excluir")

let lista = document.querySelector(".itens").children

let listaAdicionar = document.querySelector(".itens")

let contador = 1

let flag

adicionar.addEventListener("click", (event)  => {
    let quantidade = document.querySelector(".quantidade").valueAsNumber

    let item = document.querySelector(".item").value
    
    if (isNaN(quantidade) || quantidade == 0) {
        quantidade = 1
    }

    if (quantidade < 1) {

       verificar(item, quantidade)
    }

    if (quantidade > 0) {

        flag = true

        verificarQuantidade(item, quantidade)

        if (flag == true) {
            
            adicionarLinha(".itens", contador, quantidade, item)
        
            contador++
        }
        
    }

    
})
excluir.addEventListener("click", (event) => {

    posicao = qtdExcluir.value

    
        deleteRow(posicao)
    
})

function verificar(item, quantidade) {
    let flag2 = true 
    while (flag2 === true) {
        for (let i = 0; i < lista.length; i++) {
            let linhaVerificar = lista[i].children
            for (let j = 2; flag2 == true ;) {
                if (item === linhaVerificar[j].outerText) {
                    remover = Number(linhaVerificar[1].innerText)
                    if (remover + quantidade < 0) {
                        if (i === 0) {
                            deleteRow(i + 1)
                        }
                        deleteRow(i)
                        flag2 = false
                        return
                    }
                    novoValor = remover + quantidade
                    linhaVerificar[1].innerText = novoValor
                    flag2 = false
                    return
                }
            }
        }
        flag2 = false
    }
    return true
}
function deleteRow(i){

    if (i <= 0) {
        return
    }

    document.querySelector(".table").deleteRow(i)
}
function adicionarLinha(idTabela, contador, quantidade, item) {

    let tabela = document.querySelector(idTabela);
    let numeroLinhas = tabela.rows.length;
    let linha = tabela.insertRow(numeroLinhas);
    let celula1 = linha.insertCell(0);
    let celula2 = linha.insertCell(1);   
    let celula3 = linha.insertCell(2); 
    celula1.innerHTML = contador
    celula2.innerHTML = quantidade 
    celula3.innerHTML = item
}
function verificarQuantidade(item, quantidade) {
    debugger
    let flag1 = true 
    while (flag1 === true) {
        for (let i = 0; i < lista.length; i++) {
            let linhaVerificar = lista[i].children
            for (let j = 2; j == 2 ;) {
                if (item === linhaVerificar[j].outerText) {
                    remover = Number(linhaVerificar[1].innerText)
                    novoValor = remover + quantidade
                    linhaVerificar[1].innerText = novoValor
                    flag = false
                    return
                } else {
                    j++
                }
            }
        }
        flag1 = false
    }
}