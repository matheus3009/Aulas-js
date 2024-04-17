'use strict'

//declarando objetos

const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R Tolkien",
    volumes: 3,
    ano: 1954
};

console.log(livro);

//Acessando cada propriedade

console.log(livro.titulo);
console.log(livro.autor);

console.log(
    `${livro.titulo} foi criado por ${livro.autor}`
);

const carro = {
    marca: "Pagani",
    modelo: "huayra BC",
    anoDeFabricação: 2011,
    cor: "prata",
    quantidadeDePortas: 2,
    //Array
    listaOpcional: [
    "ar-condicionado", "vidros elétricos", "aerofolio"
]
};



console.log(`O ${carro.marca} ${carro.modelo}, fabricado em ${carro.anoDeFabricação} é um hyper esportivo que conta com ${carro.quantidadeDePortas} portas e cor ${carro.cor} conta com ${carro.listaOpcional [1]}, ${carro.listaOpcional [0]} e um belo ${carro.listaOpcional [2]}.`);

// Objeto com array e outro objeto

const pessoa = {
    nome: "Chapolin Colorado",
    idade: 20,
    telefones: ["11-2135-0300", "11-96666-5555"],

    medidasFisicas: {
        peso: 75,
        altura: 1.66
    }
};

console.log(`O ${pessoa.nome} tem ${pessoa.medidasFisicas.peso} kg e ${pessoa.medidasFisicas.altura} m de altura. Contato: ${pessoa.telefones[1]}.`);

// Array de objetos
const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.JK Lewis"
    },
    {
        titulo: "Crônicas de Nárnia",
        autor: "C.S. Lewis"
    },
    {
        titulo: "Crônicas de Olam",
        autor: "L.L. Wurlitzer"
    }
];

console.log(livros[1].titulo);

console.log("---------------------------------------------------");

console.table(livro)