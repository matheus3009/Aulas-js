
/* Habilitando o modo estrito da linguagem.
Ao fazer isso, a linguagem passa a analisar se você declarou variáveos e não está usando palavras-reservadas.
Se isso acontecer, erros serão exibidos. */
'use strict';

// Comentario de APENAS uma linha (CTRL ;)
/* Comentário de multiplas linhas (SHIFT ALT A) */

//  Comando de saida de dados
console.log("Hello World!!");

/* Manipulação de dados */

// variaveis
let curso = "HTML5 e CSS3"; // string, literal (entre aspas)
let ano = 2024; // números (inteiros/real), sem aspas
let disciplina;
console.log(disciplina);

disciplina = "Lógica";
console.log(disciplina);
// Constantes
const escola = "Senac Penha";

const materia = "Português";


// saída de dados
console.log(curso);
console.log(ano);
console.log(escola);

/*  Palavras-chaves de uso reservado: public, implements, privare, arguments */

/*  let public = "Palavra-reservada!"
console.log(public) */

/* Saída de dados personalizada */

// CONCATENAÇÂO (forma mais antiga/tradicional)
console.log ("estou fazendo o curso de "+curso+" no "+escola+".");
//  TEMPLATE LITERAL/STRING (forma mais moderna)
console.log(`Estou fazendo o curso de ${curso} no ${escola}.`);

let mensagem = `Estou fazendo o curso de ${curso} no ${escola}.`;

console.log(mensagem);

/* Operações matemáticas básicas */
let valor1 = 10;  //inteiro
let valor2 = 5; //inteiro
let valor3 = 1200.55; //quebrado usando . para decimal

//Operações
let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

console.log("soma: "+soma);
console.log("subtração: "+subtracao);
console.log("multiplicação "+multiplicacao);
console.log("divisão "+divisao);

