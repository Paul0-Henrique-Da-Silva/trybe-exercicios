// objetos 
/*
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};
console.log(`A jogadora ${player.name} 
tem ${player.idade} de idade` )

let bestInTheWord = {
    array:  [2006, 2007, 2008, 2009, 2010, 2018],
}
const vezesJogadora = bestInTheWord.array.length
console.log(vezesJogadora)
console.log(`A jogadora ${player.name} foi eleita a melhor do mundo ${bestInTheWord.array.length} vezes`)
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e duas medalhas ${player.medals.silver} `)

//For/in e for/of
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
for ( let index in names ) {
    console.log(`Olá ${names[index]}`)
};  

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  let names1 = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for(let indece of names1) 
  {console.log(indece);
}
*/


//exer 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim',
};
//1
console.log(`Boas vindas ${info.personagem}`)
//2
for (let index in info)
{console.log(index)};
//3
for(let index2 in info)
{console.log(info[index2])
}

let info2 = {
   personagem: "Tio Patinhas",
   origem : "Christmas on Bear Mountain, Dell's Four Color Comics #178",
   nota: "último MacPatinhas",
   recorrente: "sim",
};

console.log(`${info.personagem} | ${info2.personagem}
${info.origem} | ${info2.origem}
${info.nota} | ${info2.nota}
Ambos são recorrente`
)
//5
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};