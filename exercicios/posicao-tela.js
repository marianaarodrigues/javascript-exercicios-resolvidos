/*

Precisamos limitar as posições em que um inimigo pode andar na tela. 
A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. 
Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, 
verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.

*/

function limitaPosicao (posicao) {
  if (posicao < 0) {
    return 0;
  } else if (posicao > 100) {
    return 100;
  } else {
    return parseInt(posicao);
  }
}

let posicaoInformada = prompt("Informe a posição que o inimigo deve andar na tela:");

if (isNaN(posicaoInformada)) {
    console.log("Erro: O valor informado não é válido. Por favor, informe a posição que o inimigo deve andar na tela.");

} else {
    let posicaoFinal = limitaPosicao(posicaoInformada);
    console.log(`A posição final do inimigo é ${posicaoFinal}.`);
}