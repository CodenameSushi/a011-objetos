// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;

const fruta1 = {
    nome: 'Morango',
    preco: 4.99,
    disp: true
}

const fruta2 = {
    nome: 'tangerina',
    preco: 2.80,
    disp: true
}

const fruta3 = {
    nome: 'acabate',
    preco: 5,
    disp:true
}

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(fruta1,fruta2,fruta3)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao)
