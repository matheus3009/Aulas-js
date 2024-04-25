'use strict'

//seleção de elemento
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");

// Criando um objeto de áudio referenciando o arquivo
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav";

//criando um Ouvinte de Evento (Event Listener)
/* O primeiro parâmetro do addEventListener é o tipo de evento que queremos "ouvir/monitorar". O segundo por executar ações no momento em que o evento acontecer. */

exemplo01.addEventListener("click", function(){
    // Exibindo um texto no parágrafo mensagem
    mensagem.textContent = "Beleza! Evento acionado!!, função executada ";

    // Ativando uma classe para o mensagem
    mensagem.classList.add("destaque");

    // modificando a fonte do body
    pagina.style.fontFamily = "Arial";

    //executando o áudio
    efeitoSonoro.play();


});