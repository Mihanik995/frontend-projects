let display = document.getElementById('display')

function appendToDisplay(value){
    display.value += value
}

function clearDisplay(){
    display.value = ''
}

function deleteLast(){
    display.value = display.value.slice(0, display.value.length - 1)
}

function calculateResult(){
    display.value = eval(display.value)
}