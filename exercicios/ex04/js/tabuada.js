let numTabuada = document.querySelector('input#tabuada');
let tabuada = document.querySelector('select#res');
let btnGerarTabuada = document.querySelector('input#btnGerarTabuada');

btnGerarTabuada.addEventListener('click', gerarTabuada);

function gerarTabuada() {
    if (numTabuada.value === '') {
        alert('Digite um número valido!');
        return;
    }

    for (let i = tabuada.options.length - 1; i >= 0; i--) {
        tabuada.options.remove(i);
    }

    let num = Number(numTabuada.value);

    for (let i = 1; i <= 10; i++) {
        let res = num * i;

        let option = document.createElement('option');
        option.value = res;
        option.text = `${num} x ${i} = ${res}`;
        tabuada.appendChild(option);
    }
}
