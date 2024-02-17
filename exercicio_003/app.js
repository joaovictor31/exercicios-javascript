/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */
valor = 0 
const h1_valor = document.getElementById('valor');
const adicionar = document.getElementById('btn_incremento');
const remover = document.getElementById('btn_decremento');



function add(){
    if (valor >= 0){
        valor += 1;
        h1_valor.textContent = valor;
        h1_valor.style.color = 'green';
    }

}

function dele(){
    if(valor <= 0){
        valor -= 1;
        h1_valor.textContent = valor;
        h1_valor.style.color = 'red';
    }
    
}

adicionar.addEventListener('click',add);
remover.addEventListener('click',dele);
