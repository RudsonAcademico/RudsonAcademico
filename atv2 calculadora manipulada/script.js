const form = document.getElementById("calcu")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let pnumero = Number(document.getElementById("num1").value)
    let snumero = Number(document.getElementById("num2").value)
    let operacao = document.getElementById("operacao").value

    let resultado

    if (operacao == "+") {
        resultado = pnumero + snumero
    } else if (operacao == "-") {
        resultado = pnumero - snumero
    } else if (operacao == "/") {
        if (snumero == 0) {
            resultado = "Operação invalida"
        } else {
            resultado = pnumero / snumero
        }
    } else if (operacao == "*") {
        resultado = pnumero * snumero
    } else {
        resultado = "Operação invalida"
    } 

    document.getElementById("resultado").innerText = "Resultado: " + resultado
})
