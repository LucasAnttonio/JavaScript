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

    if (passo >= 1) {
        res.innerHTML = "Contanto: <br>";
        for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} -> `;
        }
        res.innerHTML += " fim";
    } else {
        alert('Passo tem que ser maior que 0!')
    }
}