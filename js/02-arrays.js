'use strict';

const alunos = ["Wilian", "Vinicius", "Marli", "Duda", "Gabriel"];

// Exibindo a estrutura do array (somente no console)
console.log(alunos);

// Acessando individualmente alguns alunos
console.log(alunos[1]); // Vinicius
console.log(alunos[3]); // Duda
console.log(alunos[0]); // Wilian

const favoritos = ["violão", "guitarra", "rock", "sorvete", "Dark souls", "Metallica", "Megadeth"];

console.log(favoritos);

console.log(`estava tocando ${favoritos[1]}, após isso joguei ${favoritos[4]} escutando ${favoritos[6]}`);

/*  MATRIZ (array com mais de uma dimensão) */

const tecnologias = [
    ["HTML5", "CSS3", "javaScript"],

    ["PHP", "Node.js", "SQL", "Python", "Firebase"]
];

console.log(tecnologias[0][1]);
