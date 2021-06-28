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

    posicao = Number(qtdExcluir.value)

    deleteRowItem(posicao)
    
})

function verificar(item, quantidade) {
    let flag2 = true 
    while (flag2 === true) {

        for (let i = 1; i <= lista.length; i++) {

            let linhaVerificar = lista[i - 1].children

                if (item === linhaVerificar[2].innerText) {

                    remover = Number(linhaVerificar[1].innerHTML)

                    if (remover + quantidade <= 0) {

                        if (i === 0) {

                            deleteRow(i + 1)
                            flag2 = false
                            return

                        } else {

                            deleteRow(i)
                            flag2 = false
                            return

                        }
                    }

                    novoValor = remover + quantidade
                    linhaVerificar[1].innerText = novoValor
                    flag2 = false
                    return
                
                }

        }

        flag2 = false
    }

    return true
}

function deleteRow(i){

    if (i <= 0 || isNaN(i)) {
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
    let flag1 = true 
    if (item === "" || isNumber(item) === true ||  item >= 0 || item < 0) {
        flag = false
        return alert("Item invalido.")
    }
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
function deleteRowItem(posicao){

    if (posicao <= 0 || isNaN(posicao)) {
        return
    }
    let i
    for (let remover = 0; remover < lista.length; remover++) {
       let veriicar = Number(lista[remover].firstElementChild.innerText)
        if (veriicar === posicao) {
            i = remover + 1
            break
        }
        
    }

    if (i === undefined) {
        return
    }

    document.querySelector(".table").deleteRow(i)
}

function isNumber(n) {

    let verfContido = n.split("");

    for (let i = 0; i <= n.length; i++) {
        if (isNaN(verfContido[i]) === false) {
            return true
        }
    }

    return false
}