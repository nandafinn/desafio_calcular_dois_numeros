let numb1 = prompt("Insira o primeiro número");
let numb2 = prompt("Insira o segundo número");


numb1 = Number(numb1)
numb2 = Number(numb2)

const sum = numb1 + numb2;
const sub = numb1 - numb2;
const multi = numb1 * numb2;
const div = numb1 / numb2;
const restDiv = numb1 % numb2;


alert('A Soma dos dois números: ' + sum)
alert('A Subtração dos dois números: ' + sub)
alert('A Multiplicação dos dois números: ' + multi)
alert('A Divisão dos dois números: ' + div)
alert('O Resto da divisão dos dois números: ' + restDiv)


if (numb1 % 2 == 0  && numb2 % 2 == 0  ) {
    alert('A Soma dos dois números é par: ')			
}else {
    alert('A Soma dos dois números é impar: ')
}

if (numb1 != numb2) {
    
    alert('os números inseridos são diferentes: ')
}

