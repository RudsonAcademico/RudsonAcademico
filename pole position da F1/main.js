import { Queue } from './queue.js'

const queue = new Queue()   // fila global

function atualizarLista() {
    const lista = document.getElementById("lista")
    lista.innerHTML = ""

    let current = queue.frontNode

    while (current) {
        const p = current.value
        lista.innerHTML += `<div class="itens-lista">${p.nome} — ${p.tempo}s</div>`
        current = current.next
    }
}

function f_enqueue() {
    const piloto = document.getElementById("piloto").value
    const tempo = parseFloat(document.getElementById("tempo").value)

    if (!piloto || isNaN(tempo)) {
        alert("Preencha nome e tempo corretamente!")
        return
    }

    queue.enqueue({ nome: piloto, tempo })
    atualizarLista()
}

function f_dequeue() {
    queue.dequeue()
    atualizarLista()
}

window.f_enqueue = f_enqueue
window.f_dequeue = f_dequeue
