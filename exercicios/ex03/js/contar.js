let txtInicio = document.querySelector('input#inicio');
let txtFim = document.querySelector('input#fim')
let txtPasso = document.querySelector('input#passo')
let btnContar = document.querySelector('input#contar');
let res = document.querySelector('p#res');

btnContar.addEventListener('click', contar);

function contar() {
    let inicio = Number(txtInicio.value);
    let fim = Number(txtFim.value);
    let passo = Number(txtPasso.value);

    if (txtInicio.value === '' || txtFim.value === '') {
        res.innerHTML = 'Impossível contar!';
        return;
    }

    if (passo === 0) {
        passo = 1;
        alert('Passo inválido! Considerando passo igual a 1!');
    }

    res.innerHTML = 'Contanto: <br>';
    for (let i = inicio; i <= fim; i += passo) {
        res.innerHTML += `${i} &#x1F449; `;
    }
    res.innerHTML += ' &#x1F3C1;';
}