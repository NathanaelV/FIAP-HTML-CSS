//// Evento de Click
function handleClick(event) {
  alert(`Clicado: ${event.target.id}\nTipo do evento: ${event.type}\nTimestamp: ${event.timeStamp}`)
}
document.getElementById('button-click-listener').addEventListener('click', handleClick)

// Evento de Duplo Click
function handleDblClick(event) {
  alert(`Duplo clique detectado!\nNúmero de cliques: ${event.detail}\nTimestamp: ${event.timeStamp}`)
}
document.getElementById('button-dblclick-listener').addEventListener('dblclick', handleDblClick)

// Evento de Mouse Pressionado
function handleMouseDown(event) {
  alert(`Botão pressionado: ${event.button}\nEstado dos botões: ${event.buttons}\nPosição: X: ${event.clientX}, Y: ${event.clientY}`)
}
document.getElementById('button-mousedown-listener').addEventListener('mousedown', handleMouseDown)

// Evento de Mouse Liberado
function handleMouseUp(event) {
  alert(`Botão liberado: ${event.button}\nElemento: ${event.target.id}\nPosição: X: ${event.clientX}, Y: ${event.clientY}`)
}
document.getElementById('button-mouseup-listener').addEventListener('mouseup', handleMouseUp)

// Evento de Movimento do Mouse
function handleMouseMove(event) {
  console.log('Posição atual:', `X: ${event.clientX}, Y: ${event.clientY}`)
  console.log('Movimento:', `X: ${event.movementX}, Y: ${event.movementY}`)
  console.log('Posição na tela:', `X: ${event.screenX}, Y: ${event.screenY}`)
}
document.getElementById('button-mousemove-listener').addEventListener('mousemove', handleMouseMove)

// Evento de Mouse Over (por cima)
function handleMouseOver(event) {
  console.log('Mouse entrou no elemento:', event.target.id)
  console.log('Veio do elemento:', event.relatedTarget)
  console.log('Posição:', `X: ${event.clientX}, Y: ${event.clientY}`)
}
document.getElementById('button-mouseover-listener').addEventListener('mouseover', handleMouseOver)

// Evento de Mouse Out (saída)
function handleMouseOut(event) {
  console.log('Mouse saiu do elemento:', event.target.id)
  console.log('Foi para o elemento:', event.relatedTarget)
  console.log('Posição:', `X: ${event.clientX}, Y: ${event.clientY}`)
}
document.getElementById('button-mouseout-listener').addEventListener('mouseout', handleMouseOut)

// Evento de Mouse Enter
function handleMouseEnter(event) {
  console.log('Mouse entrou no elemento:', event.target.id)
  console.log('Posição:', `X: ${event.clientX}, Y: ${event.clientY}`)
  console.log('Timestamp:', event.timeStamp)
}
document.getElementById('button-mouseenter-listener').addEventListener('mouseenter', handleMouseEnter)

// Evento de Mouse Leave
function handleMouseLeave(event) {
  console.log('Mouse saiu do elemento:', event.target.id)
  console.log('Posição:', `X: ${event.clientX}, Y: ${event.clientY}`)
  console.log('Timestamp:', event.timeStamp)
}
document.getElementById('button-mouseleave-listener').addEventListener('mouseleave', handleMouseLeave)

// ===================== Eventos de Teclado =====================

// Evento de Tecla Pressionada
function handleKeyDown(event) {
  console.log('Tecla pressionada:', event.key)
  console.log('Código da tecla:', event.code)
  console.log('Código numérico (deprecated):', event.keyCode)
}
document.getElementById('input-keydown-listener').addEventListener('keydown', handleKeyDown)

// Evento de Tecla Liberada
function handleKeyUp(event) {
  console.log('Tecla liberada:', event.key)
  console.log('Código da tecla:', event.code)
  console.log('Era repetição?', event.repeat)
}
document.getElementById('input-keyup-listener').addEventListener('keyup', handleKeyUp)

// Evento de Tecla Pressionada e Liberada
function handleKeyPress(event) {
  console.log('Caractere:', event.key)
  console.log('Código Unicode (deprecated):', event.charCode)
  console.log('Which (deprecated):', event.which)
}
document.getElementById('input-keypress-listener').addEventListener('keypress', handleKeyPress)


// ===================== Eventos de Formulário =====================

// Evento de Submit
function handleSubmit(event) {
  event.preventDefault() // Previne o envio padrão do formulário
  console.log('Formulário enviado:', event.target.id)
  console.log('Elemento que causou o submit:', event.submitter)
}
document.getElementById('submit-event').addEventListener('submit', handleSubmit)

// Evento de Change
function handleChange(event) {
  console.log('Valor alterado:', event.target.value)
  console.log('Elemento:', event.target.id)
  console.log('Timestamp:', event.timeStamp)
}
document.getElementById('input-change-listener').addEventListener('change', handleChange)

// Evento de Input
function handleInput(event) {
  console.log('Conteúdo:', event.target.value)
  console.log('Dados inseridos:', event.data)
  console.log('Tipo de entrada:', event.inputType)
}
document.getElementById('input-input-listener').addEventListener('input', handleInput)

// Evento de Focus
function handleFocus(event) {
  console.log('Elemento focado:', event.target.id)
  console.log('Elemento anterior:', event.relatedTarget)
  console.log('Timestamp:', event.timeStamp)
}
document.getElementById('input-focus-listener').addEventListener('focus', handleFocus)

// Evento de Blur
function handleBlur(event) {
  console.log('Elemento desfocado:', event.target.id)
  console.log('Novo elemento:', event.relatedTarget)
  console.log('Timestamp:', event.timeStamp)
}
document.getElementById('input-blur-listener').addEventListener('blur', handleBlur)

// ===================== Eventos de Janela =====================

// Evento de Load
function handleLoad(event) {
  console.log('Página carregada!')
  console.log('Elemento:', event.target.id)
  console.log('Timestamp:', event.timeStamp)
  document.getElementById('button-load-listener').textContent =
    `Tempo de load: ${event.timeStamp}ms`
}
window.addEventListener('load', handleLoad)

// Evento de Resize
function handleResize(event) {
  console.log('Janela redimensionada!')
  console.log('Nova largura:', window.innerWidth)
  console.log('Nova altura:', window.innerHeight)
  document.getElementById('button-resize-listener').textContent =
    `Tamanho da janela: ${window.innerWidth}x${window.innerHeight}`
}
window.addEventListener('resize', handleResize)

// Evento de Scroll
function handleScroll(event) {
  console.log('Scroll detectado!')
  console.log('Posição Y:', window.scrollY)
  console.log('Posição X:', window.scrollX)
  document.getElementById('button-scroll-listener').textContent =
    `Scroll position: X: ${window.scrollX}, Y: ${window.scrollY}`
}
window.addEventListener('scroll', handleScroll)

// ===================== Eventos de Contexto =====================

// Evento de Menu de Contexto (botão direito)
function handleContextMenu(event) {
  event.preventDefault() // Previne o menu padrão
  console.log('Menu de contexto acionado!')
  console.log('Posição:', `X: ${event.clientX}, Y: ${event.clientY}`)
  console.log('Botão:', event.button)
}
document.getElementById('button-contextmenu-listener').addEventListener('contextmenu', handleContextMenu)

// Evento de Wheel (roda do mouse)
function handleWheel(event) {
  console.log('Movimento da roda detectado!')
  console.log('Delta Y (vertical):', event.deltaY)
  console.log('Delta X (horizontal):', event.deltaX)
  console.log('Modo:', event.deltaMode) // 0: pixels, 1: linhas, 2: páginas
}
document.getElementById('button-wheel-listener').addEventListener('wheel', handleWheel)

// ===================== Eventos Touch =====================

// Função auxiliar para obter informações do toque
function getTouchInfo(touch) {
  return {
    x: touch.clientX,
    y: touch.clientY,
    id: touch.identifier,
    força: touch.force
  }
}

// Evento de Touch Start
function handleTouchStart(event) {
  console.log('Toque iniciado!')
  const toques = Array.from(event.touches).map(getTouchInfo)
  console.log('Toques ativos:', toques)
}
document.getElementById('button-touchstart-listener').addEventListener('touchstart', handleTouchStart)

// Evento de Touch Move
function handleTouchMove(event) {
  console.log('Movimento do toque!')
  const toques = Array.from(event.touches).map(getTouchInfo)
  console.log('Toques em movimento:', toques)
}
document.getElementById('button-touchmove-listener').addEventListener('touchmove', handleTouchMove)

// Evento de Touch End
function handleTouchEnd(event) {
  console.log('Toque finalizado!')
  const toques = Array.from(event.changedTouches).map(getTouchInfo)
  console.log('Toques finalizados:', toques)
}
document.getElementById('button-touchend-listener').addEventListener('touchend', handleTouchEnd)

// Evento de Touch Cancel
function handleTouchCancel(event) {
  console.log('Toque cancelado!')
  const toques = Array.from(event.changedTouches).map(getTouchInfo)
  console.log('Toques cancelados:', toques)
}
document.getElementById('button-touchcancel-listener').addEventListener('touchcancel', handleTouchCancel)

// ===================== Inline Event Handlers =====================
// Para os eventos inline (usando atributos HTML como onclick=""), você pode copiar o conteúdo
// das funções acima e adaptá-las para serem usadas diretamente no HTML.
// Exemplo:
// onclick="console.log('Clicado:', event.target.id)"