/*Exercício 1

Obtenha o valor "Serviços" do array menu :*/
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.length;

//console.log(menuServices);

/*Exercício 2

Procure o índice do valor "Portfólio" do array menu : */
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio =  menu[2];
console.log(indexOfPortfolio);

/*Exercício 3

Adicione o valor "Contato" no final do array menu :*/

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('contato')
console.log(menu);

/* ------ "For loop" ----
Exercício 1

Utilize o for para imprimir os elementos da lista groceryList com o console.log() : */
//let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
//for(let index = 0; index < groceryList.length; index ++){
//    console.log(groceryList[index])}

/*"for of"*/

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
//}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
//}
// 11
// 21
// 31
                                                    
/*Exercício 1

Utilize o for/of para imprimir os elementos da lista names com o console.log() :*/

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(listNames of names) { console.log(listNames)}

/*  Aprofunde seus conhecimentos
Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array 
para realizar os exercícios do 1 ao 7

1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele 
contidos com a função console.log() ;
2 Para o segundo exercício, some todos os valores contidos no array e imprima o 
resultado;
3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores
 contidos no array;
 *A média aritmética é o resultado da soma de todos os elementos divido pelo número
  total de elementos. 
4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
  imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem:
 "valor menor ou igual a 20";
5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
6 - Descubra quantos valores ímpares existem no array e imprima o resultado.
    Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão 
de cada um dos elementos por 2 .
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*1*/ for (let index = 0; index < numbers.length; index++)
{console.log(numbers[index])};
/*2* e *3*/
let valorSoma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + 
numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
console.log(`valor total de: ${valorSoma}`)
valorSoma = valorSoma / 9;
console.log(valorSoma);
/*4*/
if (valorSoma > 20){console.log("valor maior que 20")}
 else if(valorSoma <= 20) {console.log("valor menor ou igual a 20")};
 /*5*/
console.log(Math.max(...numbers));
let numeroM = 70
for(let indice = 0; indice < numbers.length; indice++){
  if(numbers[indice] > numeroM) {console.log(numbers[indice])}
}
 /*6*/ 

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

/*8*/ 
let novaArray=[0]
for(let index = 2; index < 26; index = index + 1){ 
  novaArray.push(index);
  
   }; 
  console.log(novaArray.length)
  console.log(novaArray)
  

//let maiorvalor = 0
//maiorValor = Math.max(...numbers);//spoiler
//console.log(maiorvalor)


/*9*/
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};

/* Bonus
 Exercício 1
Ordene o array numbers em ordem crescente e imprima seus valores;
Solução : */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);
/* Exercício 2
Ordene o array numbers em ordem decrescente e imprima seus valores;
Solução*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);