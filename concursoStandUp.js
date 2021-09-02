// Sala 3:
//     Felipe Cabuto
//     Fabio Augusto
//     Gabriel Bernardo
//     

    
/*
É necessário determinar o vencedor de um concurso de stand up composto por 3 apresentações por participante.


O público, no máximo 100 pessoas, votou quem eles acham que era melhor no final de cada etapa. Por exemplo, Alice sobe, se apresenta e desce; Bob sobe, aparece e desce.

Após a apresentação, o público vota indicando quem eles acham que ganhou aquela rodada.

Após isso, continua o próximo lote assim como o primeiro. E finalmente um terceiro.
Se você quisesse seguir esta final, como você representaria esse problema em uma tabela semelhante a uma planilha? 
*/


function encontrarGanhador(participanteA, votosA, participanteB, votosB) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;
    
    for(let i = 0; i < votosA.length; i++) {
        if(votosA[i] > votosB[i]) {
            pontosPrimeiroParticipante++;
            
        } else if(votosA[i] < votosB[i]) {
            pontosSegundoParticipante++;
            
        } else {
            continue;
        }
    }
    
    let ganhador = pontosPrimeiroParticipante > pontosSegundoParticipante ? participanteA:participanteB;
    
    return ganhador;
}


const nomeA = "Alicia";
const nomeB = "Bob";
const votosA = [23, 69, 32];
const votosB = [12, 67, 43];

console.log("O ganador é: " + encontrarGanhador(nomeA, votosA, nomeB, votosB));