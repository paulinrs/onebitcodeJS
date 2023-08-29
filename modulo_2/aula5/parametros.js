//O que é um parâmetro?
// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função
function dobro(x) {
    console.log("O dobre de " + x + " é " + (x * 2))
  }
  dobro(5)
  dobro(7)

  //Parâmetro não informado tem valor undefined

  // Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined
dobro()

//Valor padrão para os parâmetros

// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
    console.log("Olá, " + nome + "!")
  }
  dizerOla("Paulo Roberto")
  dizerOla()

//É possível ter vários parâmetros

// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula
function soma(a, b) {
    console.log(a + b)
  }
  soma(1, 1)
  soma(34, 5)

  //A ordem dos parâmetros é importante

  // Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  function novoUsuario(nome, tipo = "leitor", email, senha) {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  criarUsuario("Paulo", "paulin.rs@email.com", "2287")
  novoUsuario("Paulo Roberto", "paulors.tech@email.com", "2287")

  //Funções com muitos parâmetros

  // Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
  function parametrosDoJeitoCerto(usuario) {
    // ...
  }
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
  parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
  const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
  }
  parametrosDoJeitoCerto(dadosDoUsuario)