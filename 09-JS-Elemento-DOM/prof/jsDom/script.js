const text = document.getElementById('text')

console.log(text)

setTimeout(() => {
  text.innerText = 'Novo texto'
}, 2000)

// window.open('https://google.com', '_blank', 'width=600,height=600')

// console.log(window.innerWidth)

function clickOnButton(myButton) {
  console.log(myButton)
  // alert('Botão clicado')
}
