const numero = prompt(
    "Olá, eu sou o Robô da Tabuada!\n" +
    "Informe o número que você deseja calcular a tabuada:"
)
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " X " + fator + " = " + (numero * fator) + "\n"
}

alert("resultado da tabuada de " + numero + ":\n\n" + resultado)