import { LinkedList } from './linkedlist.js'

const contatosList = new LinkedList()

function exibirContatos() {
    const listaElement = document.getElementById('lista')
    listaElement.innerHTML = ''
    if (!contatosList.isEmpty()) {
        for (let i = 0; i < contatosList.size() ; i++) {
            const contato = contatosList.get(i)
            listaElement.innerHTML += `
            <div class="contato-lista">
                <span><strong>Nome:</strong> ${contato.nome}</span>
                <span><strong>Telefone:</strong> ${contato.telefone}</span>
                <span><strong>Email:</strong> ${contato.email}</span>
                <input class="btn-delete" type="button" value="Deletar" onclick="f_delete('${contato.nome}')">
            </div>
            `
        }
    }
}

function limparFormulario() {
    document.getElementById('nome').value = ''
    document.getElementById('numero').value = ''
    document.getElementById('email').value = ''
}


function adicionarContato() {
    const nomeInput = document.getElementById('nome').value
    const telefoneInput = document.getElementById('numero').value
    const emailInput = document.getElementById('email').value

    if (nomeInput && telefoneInput && emailInput) {
        const contato = {
            nome: nomeInput,
            telefone: telefoneInput,
            email: emailInput
        }
        contatosList.append(contato)
        exibirContatos()
        limparFormulario()
    }
    exibirContatos()
}

function f_delete(nome) {
    let current = contatosList.head
    while (current !== null) {
        if (current.element.nome === nome) {
            contatosList.remove(current.element)
            break
        }
        current = current.next
    }
    exibirContatos()
}


function limpar() {
    contatosList.clear()
    exibirContatos()
}


window.adicionarContato = adicionarContato
window.f_delete = f_delete
window.limpar = limpar