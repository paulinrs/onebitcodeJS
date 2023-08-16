const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtraçao = x - y
const multiplicação= x * y
const divisão = x / y

alert(
    "Resultados:" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtraçao +
    "\nMultiplicação: " + multiplicação +
    "\nDivisão: " + divisão
)