import { items, enqueue, dequeue } from './queue.js'

function atualizarLista() {
    const lista = document.getElementById("lista")
    lista.innerHTML = ""

    items.forEach(p => {
        lista.innerHTML += `<div class="itens-lista">${p.nome} : ${p.prioridade}</div>`
    })
}

function f_enqueue() {
    const paciente = document.getElementById("paciente").value;
    const prioridade = parseInt(document.getElementById("prioridade").value)

    if (!paciente || isNaN(prioridade) || prioridade < 1 || prioridade > 4) {
        alert("Preencha nome e prioridade corretamente!")
        return;
    }

    enqueue({ nome: paciente, prioridade })
    atualizarLista()
}

function f_dequeue() {
    dequeue()
    atualizarLista()
}

window.f_enqueue = f_enqueue
window.f_dequeue = f_dequeue
