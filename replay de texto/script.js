import {push, pop, peek, size, isEmpty, stack  } from './stack.js'

const replay = []

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 300));
}

async function replayText() {
    for (let i = 0; i < size(); i++) {
        replay.push(stack[i])
    }
    for (let j = 0; j < replay.length; j++) {
        await sleep();
        if (replay[j] === 'Backspace') {
            document.getElementById('output').innerText = document.getElementById('output').innerText.slice(0, -1)
        } else if (replay[j] === ' ') {
            j++
            document.getElementById('output').innerText += ` ${replay[j]}`
        } else if (replay[j] === 'Control' || replay[j] === 'Shift' || replay[j] === 'Alt' || replay[j] === 'Meta' || replay[j] === 'CapsLock' || replay[j] === 'Tab' || replay[j] === 'Escape' || replay[j] === 'ArrowUp' || replay[j] === 'ArrowDown' || replay[j] === 'ArrowLeft' || replay[j] === 'ArrowRight' || replay[j] === 'Delete' || replay[j] === 'Home' || replay[j] === 'End' || replay[j] === 'PageUp' || replay[j] === 'PageDown' || replay[j] === 'Dead' ) {
            continue
        } else if (replay[j] === 'Enter') {
            document.getElementById('output').innerText += '\n'
        } else {
            document.getElementById('output').innerText += replay[j]
        }
    }
}

document.getElementById('area').addEventListener('keydown', (event) => {
    const keyName = event.key
    if (keyName === 'Control' || keyName === 'Shift' || keyName === 'Alt' || keyName === 'Meta') {
        return
    } else {
        push(keyName)
    }
})

document.getElementById('form-area').addEventListener('submit', function (e){
    e.preventDefault()
    replayText()
})

