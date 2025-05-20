// Array principal que vamos manipular em nossas demonstrações
let mainArray = ['maçã', 'banana', 'laranja', 'uva', 'pera']

// Array multidimensional para demonstração de matriz
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// Função para atualizar a exibição do array principal
function updateArrayDisplay() {
  document.getElementById('currentArray').innerHTML = `Array atual: [${mainArray.join(', ')}]`
}

// Função para adicionar elemento ao array
function addElement() {
  const input = document.getElementById('newElement')
  if (input.value) {
    // Usando o método push para adicionar ao final do array
    mainArray.push(input.value)
    input.value = ''
    updateArrayDisplay()
  }
}

// Demonstração do método pop (remove o último elemento)
function popElement() {
  const removed = mainArray.pop()
  document.getElementById('operationsResult').innerHTML = `
        Elemento removido com pop(): ${removed}<br>
        Novo array: [${mainArray.join(', ')}]
    `
  updateArrayDisplay()
}

// Demonstração do método push (adiciona ao final)
function pushElement() {
  const newElement = prompt('Digite um elemento para adicionar:')
  if (newElement) {
    mainArray.push(newElement)
    document.getElementById('operationsResult').innerHTML = `
            Elemento "${newElement}" adicionado com push()<br>
            Novo array: [${mainArray.join(', ')}]
        `
    updateArrayDisplay()
  }
}

// Demonstração do método shift (remove o primeiro elemento)
function shiftElement() {
  const removed = mainArray.shift()
  document.getElementById('operationsResult').innerHTML = `
        Elemento removido com shift(): ${removed}<br>
        Novo array: [${mainArray.join(', ')}]
    `
  updateArrayDisplay()
}

// Demonstração do método unshift (adiciona no início)
function unshiftElement() {
  const newElement = prompt('Digite um elemento para adicionar no início:')
  if (newElement) {
    mainArray.unshift(newElement)
    document.getElementById('operationsResult').innerHTML = `
            Elemento "${newElement}" adicionado com unshift()<br>
            Novo array: [${mainArray.join(', ')}]
        `
    updateArrayDisplay()
  }
}

// Demonstração do método forEach
function demonstrateForEach() {
  let result = 'Resultado do forEach:<br>'
  mainArray.forEach((item, index) => {
    result += `Elemento ${index}: ${item}<br>`
  })
  document.getElementById('iterationResult').innerHTML = result
}

// Demonstração do método map
function demonstrateMap() {
  // Transformando cada elemento em maiúsculas
  const upperArray = mainArray.map(item => item.toUpperCase())
  document.getElementById('iterationResult').innerHTML = `
        Array original: [${mainArray.join(', ')}]<br>
        Array após map(): [${upperArray.join(', ')}]
    `
}

// Demonstração do método filter
function demonstrateFilter() {
  // Filtrando elementos com mais de 4 caracteres
  const filteredArray = mainArray.filter(item => item.length > 4)
  document.getElementById('iterationResult').innerHTML = `
        Array original: [${mainArray.join(', ')}]<br>
        Elementos com mais de 4 letras: [${filteredArray.join(', ')}]
    `
}

// Demonstração do método reduce
function demonstrateReduce() {
  // Contando caracteres do itens do array e somando com reduce()
  const concatenated = mainArray.reduce((acc, curr) => acc + curr.length, 0)
  document.getElementById('iterationResult').innerHTML = `
        Contando caracteres do itens do array e somando com reduce():<br>
        ${concatenated}
    `
}

// Demonstração do método sort
function sortArray() {
  mainArray.sort((a, b) => a.localeCompare(b))
  document.getElementById('sortingResult').innerHTML = `
        Array ordenado: [${mainArray.join(', ')}]
    `
  updateArrayDisplay()
}

// Demonstração do método reverse
function reverseArray() {
  mainArray.reverse()
  document.getElementById('sortingResult').innerHTML = `
        Array invertido: [${mainArray.join(', ')}]
    `
  updateArrayDisplay()
}

// Demonstração dos métodos de busca (indexOf, includes)
function searchElement() {
  const searchTerm = prompt('Digite um elemento para procurar:')
  if (searchTerm) {
    const index = mainArray.indexOf(searchTerm)
    const includes = mainArray.includes(searchTerm)
    document.getElementById('sortingResult').innerHTML = `
            Busca por "${searchTerm}":<br>
            indexOf(): ${index}<br>
            includes(): ${includes}
        `
  }
}

// Demonstração de matriz (array multidimensional)
function updateMatrixDisplay() {
  const display = document.getElementById('matrixDisplay')
  display.innerHTML = ''
  matrix.forEach(row => {
    row.forEach(cell => {
      const cellDiv = document.createElement('div')
      cellDiv.className = 'matrix-cell'
      cellDiv.textContent = cell
      display.appendChild(cellDiv)
    })
  })
}

// Função para rotacionar a matriz
function rotateMatrix() {
  // Criando uma nova matriz rotacionada
  const newMatrix = matrix[0].map((_, index) =>
    matrix.map(row => row[index]).reverse()
  )
  matrix = newMatrix
  updateMatrixDisplay()
}

// Funções para manipulação da lista usando querySelector
function highlightCategory(category) {
  // Primeiro, remove todos os destaques anteriores
  resetHighlight()

  // Seleciona todos os itens da lista
  const items = document.querySelectorAll('.list-item')

  // Converte NodeList para Array e usa filter para encontrar itens da categoria
  const categoryItems = Array.from(items).filter(item =>
    item.textContent.includes(`Categoria ${category}`)
  )

  // Adiciona classe de destaque aos itens da categoria
  categoryItems.forEach(item => item.classList.add('highlighted'))

  // Atualiza estatísticas
  updateListStats(categoryItems, category)
}

function resetHighlight() {
  // Seleciona todos os itens e remove a classe highlighted
  const items = document.querySelectorAll('.list-item')
  items.forEach(item => item.classList.remove('highlighted'))

  // Limpa as estatísticas
  document.getElementById('listStats').innerHTML = ''
}

function updateListStats(categoryItems, category) {
  const stats = document.getElementById('listStats')
  const totalItems = document.querySelectorAll('.list-item').length

  const statsHTML = `
        <strong>Estatísticas da Categoria ${category}:</strong><br>
        Total de itens desta categoria: ${categoryItems.length}<br>
        Porcentagem do total: ${((categoryItems.length / totalItems) * 100).toFixed(1)}%<br>
        Itens encontrados: ${categoryItems.map(item => item.textContent).join(', ')}
    `

  stats.innerHTML = statsHTML
}

// Função para adicionar novo item à lista
function addNewItem() {
  const itemText = document.getElementById('newItemText').value
  const category = document.getElementById('categorySelect').value

  if (itemText.trim() !== '') {
    // Criar novo item
    const newItem = document.createElement('li')
    newItem.className = 'list-item'
    newItem.textContent = `${itemText} - Categoria ${category}`

    // Adicionar à lista
    document.querySelector('.item-list').appendChild(newItem)

    // Limpar input
    document.getElementById('newItemText').value = ''

    // Atualizar estatísticas se houver categoria destacada
    const highlightedItems = document.querySelectorAll('.list-item.highlighted')
    if (highlightedItems.length > 0) {
      highlightCategory(category)
    }
  }
}

// Função para remover itens destacados
function removeSelectedItems() {
  const highlightedItems = document.querySelectorAll('.list-item.highlighted')

  if (highlightedItems.length === 0) {
    alert('Selecione uma categoria primeiro para remover os itens.')
    return
  }

  // Converte NodeList para Array para usar o método forEach
  Array.from(highlightedItems).forEach(item => {
    // Adiciona uma animação suave de fade out antes de remover
    item.style.opacity = '0'
    item.style.transform = 'translateX(-20px)'

    // Remove o item após a animação
    setTimeout(() => {
      item.remove()
      // Atualiza as estatísticas
      const statsText = document.querySelector('#listStats strong')?.textContent || ''
      const categoryMatch = /Categoria ([A-C])/.exec(statsText)
      const currentCategory = categoryMatch ? categoryMatch[1] : null
      if (currentCategory) {
        highlightCategory(currentCategory)
      }
    }, 300)
  })
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  updateArrayDisplay()
  updateMatrixDisplay()

  // Adiciona estilo de transição aos itens da lista
  const style = document.createElement('style')
  style.textContent = `
        .list-item {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    `
  document.head.appendChild(style)
})