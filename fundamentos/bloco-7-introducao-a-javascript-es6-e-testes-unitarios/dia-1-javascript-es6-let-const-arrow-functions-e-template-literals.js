function testingScope(escopo) {
  if (escopo === true) {
  var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
  console.log(ifScope);
} else {
  var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  console.log(elseScope);
}
console.log(ifScope + ' o que estou fazendo aqui ? :O'); 

}

testingScope(true);
    

const testandoScopeEfun = (escopo) => {
  if (escopo === true) {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  ifScope = ifScope +  'ótimo, fui utilizada no escopo !'
  console.log(ifScope);
  } else {
  let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  }
          //console.log(ifScope + 'verificando scopo')
  }

  testandoScopeEfun(true)



//---------exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort()
console.log(oddsAndEvens); // será necessário alterar essa linha 😉

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
return a - b;
});
console.log(numbers)

// outra solução
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}
//outra
const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);


//---------fatorial 

const factorial= (num) => {
let result = 1;
for(let i = 1; i <= num; i++){
result *= i
}
  return result
}
console.log(factorial(5))


/*
*   Crie um código JavaScript com a seguinte especificação:
*   Não se esqueça de usar template literals
*
*Função 1 : Escreva uma função que vai receber uma string 
*como parâmetro. Sua função deverá procurar pela letra x em uma 
*string qualquer que você determinar e substituir pela string que você 
*passou como parâmetro. Sua função deve retornar essa nova string .
*    Exemplo:
*    String determinada: "Tryber x aqui!"
*    Parâmetro: "Bebeto"
*    Retorno: "Tryber Bebeto aqui!"
*    Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
*    Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
*    Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
*    JavaScript;
*    HTML; ... #goTrybe".
*/
const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// Longestword com sort em uma linha.

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

//exer 4
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));
