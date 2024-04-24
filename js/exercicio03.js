'use strict'

let dolar = 1000;
let cotacão = 5.16;

console.log(dolar);

function conversao(dolar, cotacão) {
    return dolar * cotacão
}

console.log(conversao(dolar,cotacão));


function formatar(valor, sigla){

    return new Intl.NumberFormat ("pt-br", {
        style: "currency",
        currency: sigla

    }).format(valor);
}
//sem formatação
console.log(formatar(conversao(dolar, cotacão), "BRL"));
console.log(formatar(conversao(1500, cotacão), "BRL"));
// Versão 1 (funçãoom parametro para outra função) com formatação 



// Versão 2 (primeiro, guardamos o resultado da conversão; depois passamos o resultado para a formatção)

console.log(formatar(dolar, "USD"));

