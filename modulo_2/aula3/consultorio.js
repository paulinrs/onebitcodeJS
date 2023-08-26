let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n1. Novo Paciente\n2. Paciente consultado\n3. Sair"
    )

    switch (opcao) {
        case "1": 
        const novoPaciente = prompt("Qual é o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (pacienteConsultado) {
                alert(pacienteConsultado + " Ja foi consultado, proximo paciente ")
            } else {
                alert("Fila de paciente vazia!")
            }
            
            break
        case "3":
            alert("Finalizando...")
            break
        default:
            alert("Opção invalida!")
    }
} while (opcao !== "3")