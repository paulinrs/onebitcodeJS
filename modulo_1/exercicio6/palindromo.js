const palavra = prompt("Informe uma palavra:")
let palavraIvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraIvertida += palavra[i]
}

if (palavra === palavraIvertida) {
    alert(palavra + " é um palíndromo!\n\n" +
        palavra + " igual " + palavraIvertida)
} else {
    alert(
        palavra + " não é um palindromo!\n\n" +
        palavra + " diferente " + palavraIvertida
    )
}
