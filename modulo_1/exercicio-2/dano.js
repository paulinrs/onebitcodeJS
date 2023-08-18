const personagem1 = prompt("Qual o nome do personagem de ataque?")
const ataque = parseFloat(prompt("Qual a força de ataque?"))

const personagem2 = prompt("Qual é o nome do personagem de defesa?")
let vida = parseFloat(prompt("Quanto de vida ele possui?"))
const defesa = parseFloat(prompt("Quanto de defesa ele possui?"))
const escudo = prompt("Possui escudo? (sim/não)")

let dano = 0

if (ataque > defesa && escudo === "não"){
    dano = ataque - defesa
} else if (ataque > defesa && escudo === "sim"){
    dano = (ataque - defesa) / 2
}

vida -= dano

alert(personagem1 + " causou " + dano + " pontos de dano em " + personagem2)
alert(
    personagem1 + "\nPoder de ataque:" + ataque + "\n\n" +
    personagem2 + "\nPontos de vida: " + vida + 
    "\nPoder de defesa: " + defesa + "\nPossui escudo: " + escudo
)