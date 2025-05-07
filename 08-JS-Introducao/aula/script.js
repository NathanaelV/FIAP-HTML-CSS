let num1
let num2
let operacao

function soma(a, b) {
    return a + b
}

const subtracao = (a, b) => a - b

const multiplicacao = (a, b) => {
    return a * b
}

const divisao = (a, b) => a / b

function dadosCalculadora() {
    num1 = prompt('Digite o primeiro número:')
    num2 = prompt('digite o segundo número:')
    operacao = prompt('Digite a operação desejada: +, -, *, /')
}

function calcular(num1, num2, operacao) {
    let resultado

    switch (operacao) {
        case '+':
            resultado = soma(num1, num2)
            break
        case '-':
            resultado = subtracao(num1, num2)
            break
        case '*':
            resultado = multiplicacao(num1, num2)
            break
        case '/':
            resultado = divisao(num1, num2)
            break
        default:
            alert('Operação inválida')
    }

    return resultado
}

function calculadora() {
    dadosCalculadora()
    const resultado = calcular(num1, num2, operacao)
    if (resultado !== undefined && resultado !== null) {
        alert(`O resultado da operação ${num1} ${operacao} ${num2} é ${resultado}`)
    }
}



// Resposta do Professor

// function soma(a, b) {
//     return a + b
// }

// const subtracao = (a, b) => a - b

// const multiplicacao = (a, b) => {
//     return a * b
// }

// const divisao = (a, b) => a / b

// const num1 = parseFloat(prompt('Digite o primeiro número:'))
// const num2 = parseFloat(prompt('Digite o segundo número:'))
// const operacao = prompt('Digite a operação desejada: +, -, *, /')

// function calcular(num1, num2, operacao) {
//     let resultado
//     switch (operacao) {
//     case '+':
//         resultado = soma(num1, num2)
//         break
//     case '-':
//         resultado = subtracao(num1, num2)
//         break
//     case '*':
//         resultado = multiplicacao(num1, num2)
//         break
//     case '/':
//         resultado = divisao(num1, num2)
//         break
//     default:
//         alert('Operação inválida')
//     }
//     return resultado
// }

// const resultado = calcular(num1, num2, operacao)
// if (resultado !== undefined && resultado !== null) {
//     alert(`O resultado da operação ${num1} ${operacao} ${num2} é ${resultado}`)
// }



// Converter idade para dias

function dadosIdade() {
    return prompt('Digite sua idade em anos')
}

function anosParaDias(idadeAnos) {
    return idadeAnos * 365
}

function conversorIdade() {
    let idadeAnos = dadosIdade()
    let idadeDias = anosParaDias(idadeAnos)

    if (idadeDias > 0 && idadeDias !== NaN) {
        alert(`A sua idade é ${idadeDias} dias.`)
    } else {
        alert(`Digite um valor válido. '${idadeAnos}' não é uma idade válida.`)
    }
}



// Conversor de Temperatura: Celsisus para Fahrenheit

function dadosTemperatura() {
    return prompt('Digite a temperatura em graus Celsius')
}

function celsisusParaFahrenheit(temp) {
    return (temp * 9/5) + 32
}

function converteCelsiusParaFahrenheit() {
    celsius = dadosTemperatura()
    fahrenheit = celsisusParaFahrenheit(celsius)

    console.log(fahrenheit)
    console.log(typeof fahrenheit)
    if (fahrenheit !== NaN) {
        alert(`${celsius}°C será ${fahrenheit}°F`)
    }
}
