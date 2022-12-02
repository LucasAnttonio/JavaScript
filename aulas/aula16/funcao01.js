function parimp(n) {
    if (Number(n) % 2 == 0) {
        return `O número ${n} é Par!`;
    } else {
        return `O número ${n} é Ímpar!`;
    }
}

console.log(parimp(2));