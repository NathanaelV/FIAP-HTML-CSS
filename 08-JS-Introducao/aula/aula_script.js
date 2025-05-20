// Minhas anotações

// console.log('Hello World!')

// var a = 1
// let b = 2
// const c =3

// console.log(a)
// console.log(typeof a)

// a = 4
// b = 6

// a = 'casa'
// b = ''

// console.log(a)
// console.log(typeof a)

// console.error('Deu ruim')

// // Limpa o console
// console.clear()

// // const nome = prompt('Escreva alguma coisa')

// // console.log(nome)

// // // if else
// // if (nome === 'Vinicius') {
// //     alert('Você é o Professor')
// // } else if (nome === 'João') {
// //     alert('Olá, Joâo!')
// // } else {
// //     alert('Você NÃO é o Professor')
// // }

// // // Switch case
// // switch (nome) {
// //     case 'Vinicius':
// //         alert('Olá, Vinicius')
// //         break
// //     case 'João':
// //         alert('Olá, João')
// //         break
// //     default:
// //         alert('Olá visitante')
// // }


// // Functions

// function soma(a, b) {
//     return a + b
// }

// // Anônima
// let saudacao = function (nome) {
//     return `Olá ${nome}`
// }

// // Arrow Function
// const saudacaoArrow = (nome) => {
//     return `Olá ${nome}`
// }

// // ou 

// // Em uma linha
// saudacao = (nome) => `Olá ${nome}`



// Versão do professor

console.log('Hello World!') //print

let b = null

console.log(b)
console.log(typeof b)

b = ''

console.log(b)
console.log(typeof b)


console.warn('Warning!')

console.clear()

console.log('Nova instrução')

// const nome = prompt('Escreva seu nome')

// console.log(nome)

// switch (nome) {
//   case 'Vinicius':
//     alert('Olá Vinicius!')
//     break
//   case 'João':
//     alert('Olá João!')
//     break
//   default: // -> ELSE
//     alert('Olá visitante!')
//     break
// }

const twoIsTwo = 2 == 2
const twoIsThree = 2 == 3

console.log(!twoIsTwo)

function buttonClicked() {
  console.log('Botão clicado!')
  alert('Botão clicado!')
}

// buttonClicked()


function soma(a, b) {
  return a + b
}

console.log(soma(5, 3))


console.log(soma(5, '3aaaaa'))

let saudacao = function (nome) {
  return `Olá ${nome}!`
}

console.log(saudacao('Vinicius'))

saudacao = function (nome) {
  return `Tchau ${nome}!`
}

console.log(saudacao('João'))

// Arrow Function tem uma aplicação melhor em funções anonimas
const saudacaoArrow = (nome) => `Olá ${nome}!`

console.log(saudacaoArrow('Vinicius'))

function subtracao(a, b) {
  return a - b
}
console.log(subtracao(5, 3))
console.log(subtracao(5, '3'))

function multiplicacao(a, b) {
  return a * b
}

console.log(multiplicacao(5, 3))

function divisao(a, b) {
  return a / b
}

console.log(divisao(5, 3))

console.log(divisao(5, 0))
