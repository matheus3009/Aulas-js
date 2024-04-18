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