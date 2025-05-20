// Solução com for
function calculateFactoringWithFor(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

// testes função calculateFactoringWithFor
console.log('Start - Testing calculateFactoringWithFor')

console.log(calculateFactoringWithFor(3)) // 6

console.log(calculateFactoringWithFor(10)) // 3628800

console.log(calculateFactoringWithFor(5)) // 120

console.log('End - Testing calculateFactoringWithFor')

// -----------------------------------------------

// Solução com recursão
// Recursividade é uma técnica de programação em que uma função chama a si mesma para resolver um problema.
// Para evitar loops infinitos, é necessário ter uma condição de parada.
// Ver mais em: https://www.feg.unesp.br/Home/PaginasPessoais/profedsonluizfrancasenne/pc1-cap9.pdf
function calculateFactoringWithRecursion(n) {
  if (n === 0) {
    return 1
  } else {
    return n * calculateFactoringWithRecursion(n - 1)
  }
}

// testes função calculateFactoringWithRecursion

console.log('Start - Testing calculateFactoringWithRecursion')

console.log(calculateFactoringWithRecursion(3)) // 6

console.log(calculateFactoringWithRecursion(10)) // 3628800

console.log(calculateFactoringWithRecursion(5)) // 120

console.log('End - Testing calculateFactoringWithRecursion')

// -----------------------------------------------

