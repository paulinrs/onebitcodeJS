const primeiroNome = prompt("Informe o primeiro nome do recruta")
const sobreNome = prompt("Informe o sobrenome do recruta")
const campoDeEstudo = prompt("Qual e o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?")

alert(
    "Recruta cadastrado com sucesso!" +
    "\nNome completo: " + primeiroNome + " " + sobreNome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2023 - anoDeNascimento) 
)