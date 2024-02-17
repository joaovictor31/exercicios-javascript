/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */
let valor = 0 
const h1_valor = document.getElementById('valor');
const adicionar = document.getElementById('btn_incremento');
const remover = document.getElementById('btn_decremento');

function add(){
    if (valor < 10){
        valor += 1;
        h1_valor.textContent = valor;
    }

}

function dele(){
    if(valor > -10 ){
        valor -= 1;
        h1_valor.textContent = valor;
    }
    
}

adicionar.addEventListener('click',add);
remover.addEventListener('click',dele);
