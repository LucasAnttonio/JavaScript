let numTabuada = document.querySelector('input#tabuada');
let tabuada = document.querySelector('select#res');
let btnGerarTabuada = document.querySelector('input#btnGerarTabuada');

btnGerarTabuada.addEventListener('click', gerarTabuada);

function gerarTabuada() {
    if (numTabuada.value === '') {
        alert('Digite um número valido!');
        return;
    }

    tabuada.innerHTML = '';

    let num = Number(numTabuada.value);

    for (let i = 1; i <= 10; i++) {
        let option = document.createElement('option');
        option.text = `${num} x ${i} = ${num * i}`;
        tabuada.appendChild(option);
    }
}
