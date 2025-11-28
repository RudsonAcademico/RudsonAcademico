import { Stack } from "./stack_class.js"

function converter() {
    let resultado = parseInt(document.getElementById("valor").value)
    const stack = new Stack();
    do {
        let resto = resultado % 2
        resultado = Math.floor(resultado / 2)
        stack.push(resto)
    } while (resultado >= 2);
    stack.push(resultado)

    let binario = ""
    const size = stack.size()
    for (let i = 0; i < size; i++) {
        binario += stack.pop()
    }
    return binario
}

document.getElementById("meuForm").addEventListener("submit", function (e){
    e.preventDefault()
    const binario = converter()
    document.getElementById("lista").innerHTML = ` `
    for (let i = 0; i < binario.length; i++){
        document.getElementById("lista").innerHTML += `<div class="itens-lista">${binario[i]}</div>`
    }
})


window.converter = converter;