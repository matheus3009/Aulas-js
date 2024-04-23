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

