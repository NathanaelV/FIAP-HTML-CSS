// Evento que irá rodar apenas após o carregamento da página
window.addEventListener('load', function() {
  // Pegando minha lista de tarefas
  const myList = document.getElementById('lista-tarefas')

  // Transformando os elementos da lista em um array
  const myArrayList = Array.from(myList.children)

  // Percorrendo o array
  myArrayList.forEach((element, index) => {
    // Criando um elemento small
    const smallTag = document.createElement('small')

    // Adicionando um texto ao elemento small
    smallTag.innerText = 'Concluído'

    // Adicionando o elemento small
    element.appendChild(smallTag)
  })
})