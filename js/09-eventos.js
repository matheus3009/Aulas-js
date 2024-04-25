'use strict'

//seleção de elemento
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");
const video = document.querySelector("video");

// Criando um objeto de áudio referenciando o arquivo
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav";

// Criando um objeto imagem referenciando o arquivo
const imagem = new Image();
imagem.src = "wow.gif" // ou meme.gif

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

    mensagem.insertAdjacentElement("afterend", imagem)

    //Remover o atributo hidden (isso fará o video aparecer)
    video.removeAttribute("hidden");
    video.play();// reproduzir o video
    

});

/* Exemplo Modo noturno */

const divContainer = document.querySelector(".container");
const botao = document.querySelector("#noturno");
const efeito = document.querySelector("body");


botao.addEventListener("click", function(){
  pagina.classList.toggle("noturno");
  divContainer.classList.toggle("noturno");

    /*  Desafios!!! */

    // 1) Aplicar um efeito de mudança de cores suave
    divContainer.style.transition = "3s";
    pagina.style.transition = "3s";
    //2) Fazer o botão mudar de texto, ou seja inicia com o texto "ativar" e troca para texto "desativar" conforme o que estiver acontecendo.
    if ( noturno.textContent = "desativar") {
        noturno.textContent = "desativar"
    } else {
      botao.textContent = "ativar"
    }
})