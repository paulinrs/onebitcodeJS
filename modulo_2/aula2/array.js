const arr = ["Harry", "Hermione", "Ron", "Draco", "Gina", "Neville", "Luna", "Severus"]
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

//Pesquisar por um elemento
//includes(pesquisa por um valor exato do array  retornando true ou false)
const inclui = arr.includes("Harry")
console.log(inclui)

//indexOf (pesquisa por um valor e posição exata no array)
const indice = arr.indexOf("Gina")
console.log(indice)

//Cortar e Concatenar
//slice (copia uma parte do array que foi solicitado. obs: o ultimo numero fica de fora
//no exeplo a seguir vai copiar do 0 ate o 4)
const wizard = arr.slice(0, 5)
//no exemplo a seguir copiar no negativo ou seja volta depois do 0 e conta -1, -2, -3 por exemplo)
const outros = arr.slice(-3)
console.log(arr)
console.log(wizard)
console.log(outros)

//concat ( utilizado para mesclar dois ou mais arrays e strings. Esse método não altera
 //os arrays existentes, mas, em vez disso, retorna um novo array)
const hogwarts = wizard.concat(outros, "Neville")
console.log(hogwarts)

//Substituição dos elementos
//splice
const elementosRemovidos = wizard.splice(inclui, 1, "Harry Potter")
console.log(wizard)
console.log(elementosRemovidos)

//Iterar sobre os Elementos
for (let i = 0; i < arr.length; i++){
    const elemento = arr[i]
    console.log(elemento + " se encontra na posição " + i)
}