/* 1 Faça cinco programas, um para cada operação aritmética básica.
 Seu programa deve ter duas constantes, a e b , definidas no 
 começo com os valores que serão operados. Faça programas para:*/
const a = 10;
const b = 7;
/*
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/* 2 Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas constantes com os
 valores que serão comparados.*/
 const valor1 = 90;
 const valor2 = 160;

 if (valor2 && valor2 > 80) {
     console.log(" os numeros são maiore que 80")
 } 
 else {console.log("não sao maiores que 80")};

 /*3 Faça um programa que retorne o maior de três números.
  Defina no começo do programa três constantes com os 
  valores que serão comparados.*/

const a = 6;
const b = 4;
const c = 2;

if (a > b && a > c) {
  console.log('O maior número é: ' + a + ' (a)');
} else if (b > a && b > c) {
  console.log('O maior número é: ' + b + ' (b)');
} else {
  console.log('O maior número é: ' + c + ' (c)');
};const numero2 = 40;
  const numero3 = 32;

   
  /* 4 Faça um programa que, dado um valor definido numa 
  constante, retorne "positive" se esse valor for positivo,
   "negative" se for negativo e "zero" caso contrário.*/
   
  const dinheiro = false;
  if
  (dinheiro == true)
    {console.log("to feliz com dinheirinho")}
        else if (dinheiro == false || dinheiro == 0) 
            {console.log("cadê meu dinheirinho?")};

/* 5 Faça um programa que defina três constantes com os valores dos 
três ângulos internos de um triângulo. Retorne true se os ângulos 
representarem os ângulos de um triângulo e false , caso contrário. 
Se algum ângulo for inválido o programa deve
 retornar uma mensagem de erro.

* Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
* Um ângulo será considerado inválido se não tiver um valor positivo.*/
const grau1 = 60;
const grau2 = 60;
const grau3 = 60;
let grauofinal;
if (grau1 + grau2 + grau3 == 180) {
   grauofinal = true
}
else if (grau1 + grau2 + grau3 < 180) { 
    grauofinal = false
};
console.log(grauofinal)
if (grauofinal == true) {
    console.log("Angulos são validos")
}
else if (grauofinal == false) {
    console.log("ERRO Angulos são invalidos")
};


/* 6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os 
movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com 
letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de
condicionais.
*Como dica, você pode pesquisar uma função que faz uma string ficar com todas as 
letras minúsculas (lower case) .
*Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
*Exemplo: bishop (bispo) -> diagonals (diagonais)
*/
let peca = "Bispo";
    let todasAsPecas = peca.toLowerCase()

if(todasAsPecas == "dama") { console.log ("anda 1 bloco a frente")
}
else if (todasAsPecas == "bispo") {console.log("anda  em diagonal")
}

/* 7 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em 
    conceitos de A a F. Siga essas regras:

    Porcentagem >= 90 -> A
    Porcentagem >= 80 -> B
    Porcentagem >= 70 -> C
    Porcentagem >= 60 -> D
    Porcentagem >= 50 -> E
    Porcentagem < 50 -> F

    O programa deve retornar uma mensagem de erro e encerrar se a nota passada for 
    menor que 0 ou maior que 100.
*/
let nota = 40;
 let notaPorc = nota + "%";
    if (notaPorc >= "90%" ) {console.log("A")}
    else if (notaPorc >= "80%") {console.log("B")}
    else if (notaPorc >= "70%") {console.log("C")}
    else if (notaPorc >= "60%"){console.log("D")}
    else if (notaPorc >= "50%"){console.log("E")}
    else if(notaPorc < "50%"){console.log("F")};


/* 8 Escreva um programa que defina três números em constantes e retorne true se pelo
 menos uma das três for par. Caso contrário, ele retorna false .

Bonus: use somente um if . */
let numbers1 = 8
let numbers2 = 2
let numbers3 = 9

if (numbers1 % 2 == 0 && numbers2 % 2 == 0 ||
    numbers1 % 2 == 0 && numbers3 % 2 == 0) {console.log("true")}
else if (numbers2 % 2 == 0 && numbers3 % 2 == 0 || 
    numbers2 % 2 == 0 && numbers1 % 2 == 0) {console.log("true")}
else if (numbers3 % 2 == 0 && numbers1 % 2 == 0 ||
    numbers3 % 2 == 0 && numbers2 % 2 == 0) {console.log("true")}
 else {console.log("false")};







/* 9 Escreva um programa que defina três números em constantes e retorne true se pelo
 menos uma das três for ímpar. Caso contrário, ele retorna false .

Bonus: use somente um if . */

 
const a = 1;
const b = 3;
const c = 5;

let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd); 


/* 10 Escreva um programa que se inicie com dois valores em duas constantes
 diferentes: o custo de um produto e seu valor de venda. A partir dos valores,
  calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa 
  terá ao vender mil desses produtos.

* Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos 
seus valores de entrada seja menor que zero.
*O lucro de um produto é o resultado da subtração do valor de venda pelo custo
 do mesmo, 
sendo que o imposto de 20% também faz parte do valor de custo.
    valorCustoTotal = valorCusto + impostoSobreOCusto
    lucro = valorVenda - valorCustoTotal (lucro de um produto) */
//const valor  = 4500


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};


 /*11Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de 
 seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, 
 calcule o líquido a ser recebido.

    A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para 
    as faixas de impostos, use as seguintes referências:
        INSS (Instituto Nacional do Seguro Social)
            Salário bruto até R$ 1.556,94: alíquota de 8%
            Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
            Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
            Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
        IR (Imposto de Renda)
            Até R$ 1.903,98: isento de imposto de renda
            De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
            De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
            De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
            Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

    O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
    Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
    Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
        R$ 2.670,00: salário com INSS já deduzido;
        7.5%: alíquota de imposto de renda;
        R$ 142,80 parcela a se deduzir do imposto.
    Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
    O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */


let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));