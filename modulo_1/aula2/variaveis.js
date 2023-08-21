//Em JavaScript, var, let e const são todas palavras-chave usadas para 
//declarar variáveis, mas elas têm diferenças importantes em termos de escopo 
//e mutabilidade. Aqui está uma explicação das diferenças entre elas:

//var:

//Variáveis declaradas com var são funcion-scoped (escopo de função), 
//o que significa que elas são visíveis dentro da função onde foram declaradas.
//Se uma variável var for declarada fora de qualquer função, ela terá um escopo global.
//var não tem um escopo de bloco, o que pode levar a problemas de vazamento de variáveis 
//em alguns casos.
//As variáveis declaradas com var são hoisted (içadas), o que significa que 
//a declaração da variável é movida para o topo do escopo em que a função ou 
//bloco está contido.

//let:

//Variáveis declaradas com let são block-scoped (escopo de bloco), o que significa 
//que elas são visíveis apenas dentro do bloco em que foram declaradas.
//let não é hoisted no mesmo grau que var, o que significa que você não pode 
//usar a variável antes de declará-la.
//Devido ao escopo de bloco, o uso de let ajuda a evitar problemas de vazamento de 
//variáveis e a tornar o código mais previsível.

//const:

//Variáveis declaradas com const também são block-scoped como let.
//A principal diferença é que, uma vez que uma variável é atribuída com const, 
//ela não pode ser reatribuída a um novo valor. No entanto, isso não significa 
//que o valor é imutável; em objetos e arrays, por exemplo, as propriedades e 
//elementos podem ser modificados, mas a variável em si não pode ser apontada 
//para outro valor.
//Como const não permite reatribuição, é uma boa prática usar const para valores que 
//não devem ser alterados após a atribuição inicial.

//Em resumo:

//Use [var] se estiver trabalhando com código mais antigo ou não precisar das vantagens 
//do escopo de bloco.

//Use [let] para declaração de variáveis mutáveis em escopo de bloco.

//Use [const] para valores que não devem ser reatribuídos e deseja aproveitar as
//verificações de erro que a imutabilidade traz.
//A preferência entre let e const depende da intenção de mutabilidade da variável. 
//Se você sabe que uma variável não será reatribuída, opte por const para deixar 
//isso claro e evitar acidentalmente reatribuições.


//Exemplo com var:


function exampleVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // x é visível aqui devido ao escopo de função
  }
  
  exampleVar(); // Saída: 10
  

//Exemplo com let:


  function exampleLet() {
    if (true) {
      let y = 20;
      console.log(y); 
    }
  //(Isso resultaria em um erro, pois y não é visível 
    //aqui fora do bloco)
  }
  
  exampleLet(); // Comentário o console.log para evitar um erro


//Exemplo com const:

function exampleConst() {
    const z = 30;
    // z = 40; // Tentar reatribuir z resultaria em um erro
    console.log(z); // z é 30 e é visível aqui
  }
  
  exampleConst(); // Saída: 30
  

  //Exemplo de mutabilidade com const:

  const person = {
    name: 'Geovana',
    age: 20,
  };
  
  person.name = 'Alice'
  person.age = 26; // Isso é permitido, mesmo com const, 
  //porque estamos modificando uma propriedade do objeto
  console.log(person); // Saída: { name: 'geovana', age: 26 }

  //Lembre-se de que o uso adequado de cada uma dessas palavras-chave depende 
  //do contexto e das necessidades do seu código. Geralmente, é uma boa prática 
  //usar const sempre que possível para indicar que uma variável não será reatribuída 
  //e usar let quando a mutabilidade é necessária. 
  //Evite o uso de var em código moderno, pois ele pode levar a problemas de escopo 
  //e vazamento de variáveis.






  
  