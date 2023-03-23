// //criar objeto

// const estudante = {
//     nome: "Lucas",
//     sobrenome: "Louback",
//     matricula: "22227204",
//     notas: [80,90,100]
// }
// console.log(estudante)

// estudante.modulo = "Módulo 1"

// console.log("nome: ", estudante.nome,"\nmatricula: ", estudante.matricula, "\nsegunda nota: ", estudante.notas[1])

// const estudante2 = { 
//     ...estudante,
//     nome: "marcelo",
//     modulo: 2,
//     notas: [...estudante.notas, 85],

// }
// console.log(estudante2)

const carrinho = {
    nomeComprador: prompt("Qual o seu nome?"),
    formaPag: prompt("Qual a forma de pagamento?"),
    endereco: prompt("Qual o seu endereço?"),
}

carrinho.compras = [prompt("qual o produto?"),Number(prompt("qual é o preço?")),Number(prompt("qual a quantidade?"))]
console.log(`A quantidade do produto"${carrinho.compras[0]}" é ${carrinho.compras[2]}`)


const carrinhoPresente = {
    ...carrinho,
    nomeComprador: "Daniella",
    formaPag: "cartão presente",
}

console.log(carrinho)
console.log(carrinhoPresente)




