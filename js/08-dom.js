'use strict';

/* Funções/metodos mais comuns para seleção de elementos no DOM

-getElementbyId()
Seleciona UM ELEMENTO através do atributo ID

-querySelector()
Seleciona UM ELEMENTO através de seletor baseado na lógica CSS


querySelectorAll()
Seleciona VÀRIOS ELEMENTOS através de seletor(es) baseado na lógica CSS

*/

//Exemplo 1: getElementByID()

const legenda = document.getElementById("legenda");

console.log(legenda);

//Exemplo 2: querySelector ()
const titulo = document.querySelector("h1");
console.log(titulo);

const sobreFront = document.querySelector("#sobre");
console.log(sobreFront);

/* Mini-exercícios 

1) Faça o acesso/seleção do h2 de Back-End e mostre no console.

2) Faça o acesso/seleção apenas do h2 existente dentro da div com a classe 'editores' e mostre no console.
*/

const backEnd = document.querySelector(".back-end")
console.log(backEnd);

const code = document.querySelector(".editores h2")
console.log(code);

//Exemplo3 querySelectorAll()

const subtitulos = document.querySelectorAll("h2")

console.log(subtitulos);

const variosElementos = document.querySelectorAll("p, a, p b, #teste, .xyz");

console.log(variosElementos);