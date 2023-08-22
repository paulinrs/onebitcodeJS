const arr = ["harry", "Hermione", "Ron", "Draco", "Gina", "Neville", "Luna", "Severus"]
console.log(arr)

//Adicionar Elementos
//push (adiciona um elemento no final do array)
let tamanho = arr.push("Albus", "Rúbeo")
console.log(arr)
console.log(tamanho)


//unshift (adiciona um elemento no inicio do array)
tamanho = arr.unshift("Edwiges", "Dobby")
console.log(arr)
console.log(tamanho)

//Remover Elementos
//pop (remove o ultimo elemento do array)
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift (remove o primeiro elemento do array)
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)
