const startStopButton = document.getElementById('startStop')
const resetButton = document.getElementById('reset')
const timer = document.getElementById('stopwatch')

const addOne = value => (parseInt(value) + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
var interval

startStopButton.addEventListener('click', () => {
    if (startStopButton.innerText === 'Start'){
        startStopButton.innerText = 'Stop'
        interval = setInterval(() => {
            let [hours, minutes, seconds] = timer.innerText.split(':')
            if (seconds === '59'){
                seconds = '00'
                minutes = addOne(minutes)
            } else {
                seconds = addOne(seconds)
            }
            if (minutes === '60'){
                minutes = '00'
                hours = addOne(hours)
            }
            timer.innerText = `${hours}:${minutes}:${seconds}`
        }, 1000)
    } else {
        startStopButton.innerText = 'Start'
        clearInterval(interval)
    }
})

resetButton.addEventListener('click', () => {
    timer.innerText = '00:00:00'
    clearInterval(interval)
    startStopButton.innerText = 'Start'
})