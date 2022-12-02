let num = [2, 1, 7, 6];
num.push(9)
num.sort()
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let p = num.indexOf(6);
if (p == -1) {
    console.log(`Valor não encontrado!`);
} else {
    console.log(`Este valor esta na posição ${p}`);
}