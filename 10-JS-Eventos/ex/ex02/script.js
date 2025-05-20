function save(event) {
  event.preventDefault()
  
  const form = event.target
  const name = form.name.value
  const email = form.email.value
  const message = form.message.value
  const error = document.getElementById('error')

  if (!name || !email || !message) {
    error.innerHTML = '<p>All fields are required!</p>'
    return
  }

  // validate email with regex
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
  if (!emailRegex.test(email)) {
    error.innerHTML = '<p>Invalid e-mail!</p>'
    return
  }

  error.innerHTML = ''

  const result = document.getElementById('result')
  result.innerHTML = `
    <p>Name: ${name}</p>
    <p>E-mail: ${email}</p>
    <p>Message: ${message}</p>
  `
  result.style.display = 'block'
}