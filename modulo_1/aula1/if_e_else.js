const idade = prompt("Informe a sua idade: ")

if (idade > 17) {
    alert("Você é maior de idade")
} else if (idade > 12) {
    alert("Você é menor de idade")
} else if (idade > 4) {
    alert("Você e uma criança")
} else {
    (idade > 0)
    alert("Um bebê não sabe digitar")
}


//Operador Ternário
//->forma abreviada e autoavaliada do IF ELSE
//Sintaxe: codição ? resuldado_verdadeiro : resuldado falso
//exemplo:

const resultato = ( 6 === 6) ? "verdadeiro" : "Falso"
console.log(resultato)