const veiculo1 = prompt ("Informe o nome do primeiro veiculo:")
const velocidade1 = parseFloat(prompt("informe a velocidade do primeiro veiculo:"))

const veiculo2 = prompt ("Informe o nome do segundo veiculo:")
const velocidade2 = parseFloat(prompt("informe a velocidade do segundo veiculo:"))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rápido do que " + veiculo2)
}else if(velocidade2 > velocidade1){
    alert(veiculo2 + " é mais rápido do que " + veiculo1) 
}else{
    alert(veiculo1 + " e " + veiculo2 + "possuem velocidades iguais.")
}
