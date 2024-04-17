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

if (idade >= 18) {
        console.log(`${usuario} é maior de idade.`);
} else {
    console.log(`${usuario} é menor de idade `);
}