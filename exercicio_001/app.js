/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */
const adicionar = document.getElementById("btn_incremento");
const diminuir = document.getElementById("btn_decremento");
const valor = document.getElementById("valor");
let novo_valor = parseInt(valor.textContent);


function add(){
    novo_valor+=1;
    valor.textContent = novo_valor;
}

function dele(){
    novo_valor-=1;
    valor.textContent = novo_valor;
}


adicionar.addEventListener('click', add);
diminuir.addEventListener('click', dele);


/*

RESPOSTA DO PROFESSOR

let valor = 0;

const h1_valor = document.querySelector("#valor");
document. querySelector("#btn_decremento").addEventListener('click', () => {
h1_valor.textContent = -- valor;
})
document.querySelector("#btn_incremento").addEventListener('click', () => {
h1_valor.textContent = ++ valor;
})

*/