'use strict';

// Requisitos para aprovação

const mediaMinima = 7;
const limiteDeFaltas = 10;

//Alunos de exemplo
let aluno = "Dayane";
let mediaFinal = 10;
let faltas = 0;
let resultado;

if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas) {
    resultado = "aprovado";
}else {
    resultado = "reprovado"
}

console.log(resultado)

console.log("--------------------------------");

let idade = 25;

// Operador OU/OR (||) obs: simbolo | PIPE
if (idade >= 18 || idade < 12) {
    console.log("Você é um adulto ou criança!");
}else {
    console.log("Você é um adolescente!")
}

let onibus =  2203;//; 2203 OU 2019

if (onibus == 2203 || onibus == 2019) {
    console.log("Passa no Senac, embarque!");
    
} else {
    console.log("Não passa no Senac, aguarde!")    
}