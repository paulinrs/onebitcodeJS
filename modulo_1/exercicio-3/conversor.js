const medida = prompt("Insira uma medida em metros:")

const unidade = prompt(
    "\n1. milimetros (mm)" +
    "\n2. centímetro (cm)" +
    "\n3. decímetro  (dm)" +
    "\n4. decâmetro (dam)" +
    "\n5. hectômetro (hm)" +
    "\n6. quilômetro (km)"
)

switch (unidade) {
    case "1":
        alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
        break
    case "2":
        alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
        break
    case "4":
        alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
        break
    case "5":
        alert("Resultado: " + medida + "m = " + medida  / 100 + "hm")
        break
    case "6":
        alert("Resultado: " + medida + "m = " + medida  / 1000 + "km")
        break
    default:
        alert("Opção invalida.")

}