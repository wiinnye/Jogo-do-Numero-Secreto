let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio'

function buttonConsole(){
    console.log('O botão foi clicado')
}

function alerta(){
    alert('Eu amo JS')
}

function nomeCidade(){
    let cidade = prompt('Insira uma cidade do Brasil');
alert(`Estive em ${cidade} e lembrei de você`);
}

function somar(){
    let numero1 = parseInt(prompt('Insira um numero inteiro'));
    let numero2 = parseInt(prompt('Insira mais um numero inteiro'));

    let resultado = numero1 + numero2;

    alert(`A soma dos numeros são: ${resultado}`);
}