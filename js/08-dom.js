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

/* Modificando o DOM:
Podemos alterar conteúdo, tags, estilos, criar elementos, remover elementos etc
*/

legenda.textContent = "Imagem do modelo de objetos do documento";

// Alteração de contrúdo com suporte à tags
sobreFront.innerHTML = " <i>Front-End</i>";

// Alteração de estilos inline (CSS in JS)
backEnd.style.color = "red";
backEnd.style.border = "solid black"

// Aplicação de classes CSS via JS

titulo.classList.add("destaque")

const listaDeEditores = [
    {
        nome: "Visual Studio Code",
        finalidade: "Desenvolvimento Web em geral"
    },
    {
        nome: "Android Studio",
        finalidade: "Desenvolvimento de apps android"
    },
    {
        nome: "X Code",
        finalidade: "Desenvolvimento de apps IOS"
    }
]

//Acessando /selecionando a lista que será ultilizada no HTML
const lista = document.querySelector(".lista");
console.log(lista);

/* Percorrer (loop) o array de listaDeEditores,
criar os itens <li> com o conteúdo do array e adicioná-los à lista HTML. */

//for (variavel/constante de acesso of arrayComDadosQueQueremosAcessar) {
for (const editor of listaDeEditores) {
  //Etapa1: criar elemento <li>
   const item = document.createElement("li");

  //Etapa2: adicionar conteúdo ao novo elemento
    item.innerHTML = `<b>${editor.nome}</b>: ${editor.finalidade}`;

  //Etapa3: adicionar o elemento à lista <ol>
  lista.appendChild(item);
}