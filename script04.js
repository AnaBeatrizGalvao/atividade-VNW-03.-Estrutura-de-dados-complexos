// 11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.
const cadastro = [
  {
    nome: "Ana",
    idade: 17,
    telefone: "11 40028922",
    amigos: [
      "Alex",
      "Vinícius",
      "Abel",
      "João"
    ]
  },
  {
    nome: "Alex",
    idade: 29,
    telefone: "21 975664294",
    amigos: [
      "Ana",
      "Vinícius",
      "Abel",
      "João"
    ]
  },
  {
    nome: "João",
    idade: 25,
    telefone: "11 23068992",
    amigos: [
      "Kauan",
      "Vinícius",
      "Abel",
      "Ana"
    ]
  },
  {
    nome: "Abel",
    idade: 19,
    telefone: "21 42025992",
    amigos: [
      "Abel",
      "Vinícius",
      "Abel",
      "João",
      "Ana"
    ]
  },
  {
    nome: "Kauan",
    idade: 19,
    telefone: "11 42826722",
    amigos: [
      "João",
      "Vinícius",
      "Abel",
      "Ana"
    ]
  }
]

// 12- Mostre no console o nome de um amigo de cada lista.

// for (const pessoa of cadastro){
//   console.log(`Amigo de ${pessoa.nome}: ${pessoa.amigos[0]}`);
// }

// cadastro.forEach(function(pessoa){
//   console.log(`Amigo de ${pessoa.nome}: ${pessoa.amigos[0]}`);
// })

cadastro.forEach(pessoa => {
  console.log(`Amigo de ${pessoa.nome}: ${pessoa.amigos[0]}`);
})