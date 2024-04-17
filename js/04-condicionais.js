'use strict';

/* Comando utilizados em condicionais
if (se)
else (senão)
if else (senão se)

switch/case (escolha/caso) 

Operadores relacionais:
> MAIOR QUE
< MENOR QUE
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
!= DIFERENÇA
== IGUALDADE


*/

//condicional Simples

let numero = 10;

if(numero > 5){
    console.log("Mensagem exibida pois a condição é VERDADEIRA!");
}

//Condicional COMPOSTA
let usuario = "Ozzy Osbourne";
let idade = 73;


// Variável com propósito de guardar a palavra "maior" ou "menor"

let texto;// undefined

if (idade >= 18) {
        texto = "maior";
        // console.log(`${usuario} é maior de idade.`);
} else {
    texto = "menor";
    // console.log(`${usuario} é menor de idade `);
}

console.log(`${usuario} é ${texto} de idade.`);