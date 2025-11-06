let pnumero = Number(prompt("Digite o primeiro numero:"))
let snumero = Number(prompt("Digite o segundo numero:"))
let operacao = prompt("escolha uma operação entre: +, -, /, *")
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


alert(`${resultado}`)