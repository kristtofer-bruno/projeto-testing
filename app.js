alert('Boas vindas ao jogo do número do secreto!');
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute = 0;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute){
        break;
    }
    else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute} / tentativa ${tentativas}`);
        }
        else{
            alert(`O número secreto é maior que ${chute} / tentativa ${tentativas}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} e acertou na ${tentativas} ${palavraTentativa}`);
