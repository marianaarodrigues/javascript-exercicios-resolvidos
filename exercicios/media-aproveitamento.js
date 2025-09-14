/*

Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas
3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de
aproveitamento, usando a fórmula:

MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7

A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,
suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a
mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.

Média de aproveitamento Conceito
>= 90 A
>= 75 e < 90 B
>= 60 e < 75 C
>= 40 e < 60 D
< 40 E

*/

let id = prompt("Informe o número de identificação do(a) aluno(a):");
let nota1 = parseFloat(prompt("Informe a nota da primeira verificação, de 0 a 100:"));
let nota2 = parseFloat(prompt("Informe a nota da segunda verificação, de 0 a 100:"));
let nota3 = parseFloat(prompt("Informe a nota da terceira verificação, de 0 a 100:"));
let ME = parseFloat(prompt("Informe a média dos exercícios, de 0 a 100:"));

const nota1Valida = nota1 >= 0 && nota1 <= 100;
const nota2Valida = nota2 >= 0 && nota2 <= 100;
const nota3Valida = nota3 >= 0 && nota3 <= 100;
const MEValida = ME >= 0 && ME <= 100;

if (!nota1Valida || !nota2Valida || !nota3Valida || !MEValida) {
    console.log("Erro: Os valores informados são inválidos. Por favor, informe as notas das verificações e a média dos exercícios.");
    
} else {
    MA = (nota1 + nota2 * 2 + nota3 * 3 + ME) / 7;
    let mensagem = `
    Número de identificação do(a) aluno(a): ${id}.
    Nota da primeira verificação: ${nota1}.
    Nota da segunda verificação: ${nota2}.
    Nota da terceira verificação: ${nota3}.
    Média dos exercícios: ${ME}.
    Média de aproveitamento: ${MA.toFixed(1)}.
    `;

    if (MA >= 90) {
        console.log(mensagem + `Conceito correspondente: A.
    Situação: Aprovado(a).
    `);

    } else if (MA >= 75 && MA < 90) {
        console.log(mensagem + `Conceito correspondente: B.
    Situação: Aprovado(a).
    `);

    } else if (MA >= 60 && MA < 75) {
        console.log(mensagem + `Conceito correspondente: C.
    Situação: Aprovado(a).
    `);

    } else if (MA >= 40 && MA < 60) {
        console.log(mensagem + `Conceito correspondente: D.
    Situação: Reprovado(a).
    `);

    } else {
        console.log(mensagem + `Conceito correspondente: E.
    Situação: Reprovado(a).
    `);
    }
}