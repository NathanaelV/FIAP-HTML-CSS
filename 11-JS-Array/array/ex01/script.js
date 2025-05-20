// Listas para testar as funções
const list1 = [1, 2, 3, 4, 5]
const list2 = [43, 25, 22, 1, 33]
const list3 = [12.5, 22.1, 53.3, 566.1, 72.2, 12.3, 39.0, 87.6, 23.7, 10.1]

// ---------------------------------------------------

// Solução com for
function findMajorElementWithFor(array) {
  let majorNumber = array[0]
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > majorNumber) {
      majorNumber = array[i]
    }
  }
  
  return majorNumber
}

// testes função findMajorElementWithFor
console.log('Start - Testing findMajorElementWithFor')

console.log(findMajorElementWithFor(list1)) // 5

console.log(findMajorElementWithFor(list2)) // 43

console.log(findMajorElementWithFor(list3)) // 566

console.log('End - Testing findMajorElementWithFor')

// ---------------------------------------------------

// Solução com Math
function findMajorElementWithMath(array) {
  return Math.max(...array)
}

// testes função findMajorElementWithMath
console.log('Start - Testing findMajorElementWithMath')

console.log(findMajorElementWithMath(list1)) // 5

console.log(findMajorElementWithMath(list2)) // 43

console.log(findMajorElementWithMath(list3)) // 566

console.log('End - Testing findMajorElementWithMath')

// ---------------------------------------------------

// Solução com reduce
function findMajorElementWithReduce(array) {
  return array.reduce((majorNumber, currentItem) => {
    if (currentItem > majorNumber) {
      return currentItem
    } else {
      return majorNumber
    }
  }, array[0])
}

// testes função findMajorElementWithReduce
console.log('Start - Testing findMajorElementWithReduce')

console.log(findMajorElementWithReduce(list1)) // 5

console.log(findMajorElementWithReduce(list2)) // 43

console.log(findMajorElementWithReduce(list3)) // 566

console.log('End - Testing findMajorElementWithReduce')
