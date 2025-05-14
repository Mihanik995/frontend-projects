const display = document.getElementById('display')
let currentColor = 'white'
let mousedown = false
const body = document.getElementsByTagName('body')[0]
let pixelsWidth = 100

body.addEventListener("mousedown", () => mousedown = true)

body.addEventListener("mouseup", () => mousedown = false)

for (const button of document.getElementsByClassName('colorButton')) {
    button.addEventListener('click', () => {
        currentColor = button.style.backgroundColor
    })

}

display.style.gridTemplateColumns = `repeat(${pixelsWidth}, ${50/pixelsWidth}vw)`
for (let i = 0; i < pixelsWidth; i++) {
    for (let j = 0; j < Math.floor(pixelsWidth / 2); j++) {
        const newPixel = document.createElement('div')
        newPixel.className = 'pixel'
        display.appendChild(newPixel)
    }
}

for (const pixel of document.getElementsByClassName('pixel')) {
    pixel.addEventListener('mousedown', () => pixel.style.backgroundColor = currentColor)
    pixel.addEventListener('mouseover', () => {
        if (mousedown) pixel.style.backgroundColor = currentColor
    })
}

document.getElementById('clear').addEventListener('click', () => {
    for (const pixel of document.getElementsByClassName('pixel')) {
        pixel.style.backgroundColor = 'white'
    }
})
