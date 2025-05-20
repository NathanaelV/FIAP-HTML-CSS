let color = 'black'
function changeTextStyle() {
    if (color === 'black') {
        color = 'purple'
    } else {
        color = 'black'
    }

    document.body.style.color = color
}

function changeBodyClass() {
    const hasPurple = document.body.classList.contains('red')

    if (hasPurple) {
        document.body.classList = ''
    } else {
        document.body.classList = 'red'
    }
}