// anotações em linha no JS
// Fluxo para o carrossel
// Passos
// 1 Acessar a Janela (Browser)
// 2 Pegar o HTML todo
// 3 Pegar botão
// 4 Saber que está sendo clicado no botão

// 5 Acessar a Janela
// 6 Pegar o HTML todo
// 7 Pegar o elements
// 8 Mover o elements para a direita

//

const buttonRight = window.document.querySelector('.button-arrow.-right');
const buttonLeft = window.document.querySelector('.button-arrow.-left');
// dentro do meu browser (window) quero acessar(.) o documento (HTML) e dentro desse documento quero acessar um seletor (querySelector) para guardar uma variável utilizamos o const + o nome da sua variável no caso buttonRight
const elements = window.document.querySelector('.elements');
let pixels = 100;

buttonRight.addEventListener('click', function () {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});

buttonLeft.addEventListener('click', function () {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
});
