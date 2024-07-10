let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio 2'

// 
let textoNoConsole= exibirNoConsole();
function exibirNoConsole(){
return  console.log('Olá Mundo');
}

// 
function exibirNome(nome){
    let nomeExibido = document.querySelector(nome);
    nomeExibido.innerHTML = console.log(`Olá ${nome}!`);
}
exibirNome('Maria');

// 
function dobrandoOvalor(numero){
    return numero * 2;
}
let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

// 
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);


//   
  function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);

//   
  function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 