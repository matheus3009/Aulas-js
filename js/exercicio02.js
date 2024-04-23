'use strict'

const clientes = [
    {
        id: 1,
        nome: "Goku"
    },
    {
        id: 2,
        nome: "naruto"
    },
    {
        id:3,
        nome: "shiryu"
    }
];

console.log(clientes);


for (const cliente of clientes) {
    console.log(`Cliente: ${cliente.nome} (id ${cliente.id})`);
}
    

