var valor;
var resultado
function botao(numero){
    valor = document.calc.visor.value += numero;
}

function apaga(){
    document.calc.visor.value = '';
}
function calcula() {
    resultado = eval(valor);
    valor = document.calc.visor.value = resultado;
}