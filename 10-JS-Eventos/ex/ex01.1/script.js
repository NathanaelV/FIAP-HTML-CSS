function toggleToDarkTheme() {
  const body = document.querySelector('body')
  body.style.backgroundColor = 'black'
  body.style.color = 'white'

  // OU
  // document.body.style.backgroundColor = 'black'
  // document.body.style.color = 'white'
}

function toggleToLightTheme() {
  document.body.style.backgroundColor = 'white'
  document.body.style.color = 'black'
}

function toggleToGrayTheme() {
  document.body.style.backgroundColor = 'gray'
  document.body.style.color = 'white'
}

document.getElementById('dark').addEventListener('click', toggleToDarkTheme)
document.getElementById('light').addEventListener('click', toggleToLightTheme)
document.getElementById('gray').addEventListener('click', toggleToGrayTheme)