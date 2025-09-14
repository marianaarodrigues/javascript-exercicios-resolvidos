/*

O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo
com a tabela abaixo.

IMC em adultos Condição

Abaixo de 18,5 Abaixo do peso
Entre 18,5 e 25 Peso normal
Entre 25 e 30 Acima do peso
Acima de 30 obeso

*/

let peso = parseFloat(prompt("Informe o peso da pessoa em kg:"));
let h = parseFloat(prompt("Informe a altura da pessoa em metros:"));
let imc;

// A altura máxima registrada para um ser humano é de 2,72 metros, mais do que isso é considerado
// impossível devido a limites físicos.
const alturaPossivel = h > 0 && h < 3.0;

// O ser humano com o maior peso já registrado atingiu aproximadamente 635 kg.
const pesoPossivel = peso > 0 && peso < 650.0;

if (isNaN(h) || isNaN(peso) || !alturaPossivel || !pesoPossivel) {
    console.log("Erro: Os dados informados não são válidos. Por favor, informe a altura em metros e o peso em kg.");
} else {
    imc = peso / (h * h);

    if (imc < 18.5) {
        console.log("A pessoa é considerada abaixo do peso, conforme cálculo do IMC - Indice de Massa Corporal.");
        console.log(`IMC = ${imc.toFixed(1)}.`);

    } else if (imc >= 18.5 && imc < 25) {
        console.log("A pessoa é considerada com peso normal, conforme cálculo do IMC - Indice de Massa Corporal.");
        console.log(`IMC = ${imc.toFixed(1)}.`);

    } else if (imc >= 25 && imc < 30) {
        console.log("A pessoa é considerada acima do peso, conforme cálculo do IMC - Indice de Massa Corporal.");
        console.log(`IMC = ${imc.toFixed(1)}.`);

    } else {
        console.log("A pessoa é considerada obesa, conforme cálculo do IMC - Indice de Massa Corporal.");
        console.log(`IMC = ${imc.toFixed(1)}.`);
    }
}