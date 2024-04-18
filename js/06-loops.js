'use strict'

/* Loops tradicionais mais usados
- While (enquanto)
- For (para)

Normalmente, os loops são controlados através de uma variável contadora ou de alguma condição lógica para que o loop seja interrompido.
*/

// Loop WHILE

/*let contador = 1;

while(contador <=5){
    console.log("valor do contador:"+contador);
    contador++;
}  */

//loop FOR

for( let i = 1; i <=10; i++ ){
    console.log("i vale:"+i);
}

/* normalmente,váriaveis de controle de repetição são chamadas de "i", "j", "k". */

//Loop para acessar arrays

const alunos = ["Chaves", "Chapolin", "Seu Madruga", "kiko", "jaiminho", "bruxa do 71"];

for(let i = 0; i < alunos.length; i++ ){
     console.log(alunos[i]);
}

//loop exclusivo do JS para arrays: for/of

for (const aluno of alunos){
    console.log(aluno);
} 

//loop exclusivo do JS para objetos: for/in

const livro = {
    titulo: "HTML5",
    autor: "maujor",
    site: "http://maujor.com",
    ano: 2016
};

console.log("----------");

for (const prop in livro){
    console.log(livro[prop]);
}




