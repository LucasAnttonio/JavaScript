let inputNum = document.querySelector('input#num')
let selectTabela = document.querySelector('select#tabela')
let res = document.querySelector('div#res')
let btnAdd = document.querySelector('input#add')
let btnFin = document.querySelector('input#fin')
let tabelaNum = []

btnAdd.addEventListener('click', adicionar)
btnFin.addEventListener('click', finalizar)

function adicionar() {
    res.innerHTML = ``
    let num = Number(inputNum.value)

    if (inputNum.value === "") {
        alert("digite um número por favor!")
        return
    }

    if (num < 1 || num > 100) {
        alert("coloque um número dentro do intervalo!")
        return
    }

    if (tabelaNum.indexOf(num) != -1) {
        alert("O número já esta na lista!")
        return
    }

    tabelaNum.push(num)
    let option = document.createElement('option')
    option.text = `Valor ${num} adicionado`
    selectTabela.appendChild(option)
}

function finalizar() {
    if (inputNum.value === "") {
        alert("Adicione valores antes de adicionar!")
        return
    }

    res.innerHTML = ``;
    let totalNum = 0;

    for (let i = 0; i < tabelaNum.length; i++) {
        totalNum += Number(tabelaNum[i])
    }

    res.innerHTML += `<p>Ao todo, temos ${tabelaNum.length} números cadastrados.</p>` 

    res.innerHTML += `<p>O maior valor informado foi ${Math.max(...tabelaNum)}.</p>`

    res.innerHTML += `<p>O menor valor informado foir ${Math.min(...tabelaNum)}.</p>`

    res.innerHTML += `<p>Somando todos os valores, temos ${totalNum}.</p>`

    res.innerHTML += `<p>A média dos valores digitados ${totalNum/tabelaNum.length}</p>`
}