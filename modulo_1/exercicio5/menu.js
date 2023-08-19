let opcao = "5"

do {
    opcao = prompt(
        "Seja bem-vindo(a)\n" +
            "\nEscolhas umas das opções abaixo:" +
            "\n1. Opção um" +
            "\n2. Opção dois" +
            "\n3. Opção três" +
            "\n4. Opção quatro" +
            "\n5. Encerrar"
    )

    switch (opcao) {
        case "1":
            alert("Você escolheu a opção 1")
            break
            case "2":
            alert("Você escolheu a opção 2")
            break
            case "3":
            alert("Você escolheu a opção 3")
            break
            case "4":
            alert("Você escolheu a opção 4")
            case "5":    
            alert("Você escolheu encerrar")
            alert("Encerrando...")
            break
          default:  
            alert("opção inválida")
        
    }

} while (opcao !== "5")