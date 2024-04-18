'use strict'

let nota1 = 1;
let nota2 = 0;
let soma = nota1 + nota2;
let media = soma / 2;


console.log(media);

let texto4;

if (media >= 7) {
    texto4 = "aprovado";
} else if ( media >= 5) {
    texto4 = "recuperação";
} else {
    texto4 = "reprovado";
};

console.log(`${texto4}`);
