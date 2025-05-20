function openImage(element) {
  const dialog = document.getElementById("image-opened")
  const image = document.getElementById("image-element")

  const src = element.src
  const alt = element.alt

  image.src = src
  image.alt = alt

  dialog.setAttribute("open", true)
  dialog.classList.add("open")
}

function closeImage() {
  const dialog = document.getElementById("image-opened")
  dialog.removeAttribute("open")
  dialog.classList.remove("open")

  const image = document.getElementById("image-element")
  image.src = ""
  image.alt = ""
}

function zoomImage(image, event) {
  const isZoomed = image.style.transform === "scale(3)"

  // get the mouse position relative to the image
  const rect = image.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  if (isZoomed) {
    image.style.transform = "scale(1)"
    image.style.cursor = "zoom-in"
    image.style.transformOrigin = "center"
  } else {
    image.style.transform = "scale(3)"
    image.style.cursor = "zoom-out"
    image.style.transformOrigin = `${x}px ${y}px`
  }
}