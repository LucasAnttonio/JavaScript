function contar() {
    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let contando = document.querySelector('div#contando');

    if (inicio.value === '' || fim.value === '') {
        contando.innerHTML = 'Impossível contar!';
        return;
    }

    inicio = Number(inicio.value);
    fim = Number(fim.value);
    passo = Number(passo.value);

    if (passo <= 0) {
        passo = 1;
        alert('Passo inválido! Considerando passo igual a 1!');
    }

    contando.innerHTML = 'Contanto: <br>';
    for (let i = inicio; inicio > fim ? i >= fim : i <= fim; inicio > fim ? i -= passo : i += passo) {
        contando.innerHTML += `${i} \u{1F449} `;
    }
    contando.innerHTML += ' \u{1F3C1}';
}