/*

Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
decrescente.

*/

let A = parseInt(prompt("Informe um valor inteiro qualquer:"));
let B = parseInt(prompt("Informe um novo valor inteiro, diferente do anterior:"));
let C = parseInt(prompt("Informe um novo valor inteiro, diferente dos dois anteriores:"));

const saoInteirosValidos = Number.isInteger(A) && Number.isInteger(B) && Number.isInteger(C);
const saoDiferentes = A !== B && A !== C && B !== C;

if (!saoInteirosValidos || !saoDiferentes) {
    console.log("Erro: Valores informados não são válidos. Por favor, digite números inteiros distintos.");

} else if (A > B && A > C) {
    if (B > C) {
        console.log(`Valores informados em ordem decrescente: ${A}, ${B}, ${C}.`)
    } else {
        console.log(`Valores informados em ordem decrescente: ${A}, ${C}, ${B}.`)        
    }

} else if (B > A && B > C) {
    if (A > C) {
        console.log(`Valores informados em ordem decrescente: ${B}, ${A}, ${C}.`)
    } else {
        console.log(`Valores informados em ordem decrescente: ${B}, ${C}, ${A}.`)        
    }
    
} else if (C > A && C > B) {
    if (A > B) {
        console.log(`Valores informados em ordem decrescente: ${C}, ${A}, ${B}.`)
    } else {
        console.log(`Valores informados em ordem decrescente: ${C}, ${B}, ${A}.`)        
    }
}