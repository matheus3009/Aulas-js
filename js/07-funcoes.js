'use strict'

// Sintaxe 1: função anônima

const exemplo1 = function () {
    console.log("Função anônima");
}

//Chamando/invocando a função
exemplo1();

// Sintaxe 2: função nomeada/declarada

function exemplo2(){
    console.log("Função nomeada/declarada");
}

exemplo2();

// Sintaxe 3: arrow function (função flecha/seta)

const exemplo3 = () => {
    console.log("Arrow function");
};

exemplo3(); 
/* Obs.: funções (em qualquer sintaxe) também podem trabalhar com parâmetros/argumentos entre os parênteses.

Geralmente, ao término do processamento dos parâmetrosm a função "retorna" para fora um resultado.
*/

//Exemplos diversos
function somar (valor1, valor2) {
    return valor1 + valor2;
}
//podemos chamae diversas vezes alterando o valor
console.log( somar(10,5));
console.log( somar(100,100));
console.log( somar(-1,-8));

/* Formatação de valores monetários em reais */

let preco = 5000;
let desconto = preco * 0.10; //10%
let precoFinal = preco - desconto;

console.log(`Preço: ${formatarPreco(preco)}`);
console.log(`Desconto ${formatarPreco(desconto)}`);
console.log(`Preço final ${formatarPreco(precoFinal)}`);

function formatarPreco (valor){
    return  new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}

function formatarValor(valor){
    /* Constante/Variavel de escopo LOCAL, ou seja, só pode ser usada aqui dentro desta função */

    const opcoes = {
        style: "currency",
    currency: "BRL"
    }

    return new Intl.NumberFormat(pt-br, opcoes).format
    (valor)
}

console.log("------------------------------");

/*  Sobre a sintaxe 3: Arrow Function
Sintaxe moderna para funções no JS, bastante usada em bibliotecas/frameworks como React, React Native, Angular, Vue e etc.
A sintaxe geral é:

const algum nome = () => {};

No entanto, esta sintaxe pode ser simplificada em alguns casos.
*/

//Versão 1 (nomeada/declarada)
/* 
function dobra(valor){
    return valor * 2:
} */

// Versão 2 (arrow function)

/* const dobra = (valor) => {
    return valor * 2;
}; */

// Versão 3 (arrow function com retorno implicito)
const dobra = valor => valor * 2;


//chamada
console.log( dobra(10));
console.log( dobra (55));
console.log( dobra(1278.99));

// Funções como métodos/comportamentos de Objetos
let pessoa = {
    nome: "Fulano",
    idade: 25,
    verificaIdade(){
        if (pessoa.idade >= 18) {
        return "maior"
        } else {
            return "menor"
        }
    }
};

console.log(pessoa.nome);
console.log(`É ${pessoa.verificaIdade()}`);