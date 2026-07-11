let valorAtual = '';
let operador = '';
let valorAnterior = '';

function adicionarValor(valor) {
    valorAtual += valor.toString();
    document.getElementById('display').value = valorAtual;
}

function adicionarOperador(oper) {
    valorAnterior = valorAtual;
    operador = oper;
    valorAtual = '';
    document.getElementById('display').value = '';
}

function adicionarPonto() {
    if (!valorAtual.includes('.')) {
        valorAtual += '.';
        document.getElementById('display').value = valorAtual;
    }
}

function calcular() {
    let resultado;
    switch (operador) {
        case '+':
            resultado = parseFloat(valorAnterior) + parseFloat(valorAtual);
            break;
        case '-':
            resultado = parseFloat(valorAnterior) - parseFloat(valorAtual);
            break;
        case '*':
            resultado = parseFloat(valorAnterior) * parseFloat(valorAtual);
            break;
        case '/':
            resultado = parseFloat(valorAnterior) / parseFloat(valorAtual);
            break;
        default:
            resultado = valorAtual;
    }
    document.getElementById('display').value = resultado.toString();
    valorAtual = resultado.toString();
    valorAnterior = '';
    operador = '';
}

function calcularSen() {
    let resultado = Math.sin(parseFloat(valorAtual));
    document.getElementById('display').value = resultado.toString();
    valorAtual = resultado.toString();
}

function calcularCos() {
    let resultado = Math.cos(parseFloat(valorAtual));
    document.getElementById('display').value = resultado.toString();
    valorAtual = resultado.toString();
}

function calcularTan() {
    let resultado = Math.tan(parseFloat(valorAtual));
    document.getElementById('display').value = resultado.toString();
    valorAtual = resultado.toString();
}

function calcularLog() {
    let resultado = Math.log(parseFloat(valorAtual));
    document.getElementById('display').value = resultado.toString();
    valorAtual = resultado.toString();
}

function calcularRaiz() {
    let resultado = Math.sqrt(parseFloat(valorAtual));
    document.getElementById('display').value = resultado.toString();
    valorAtual = resultado.toString();
}

function limpar() {
    valorAtual = '';
    valorAnterior = '';
    operador = '';
    document.getElementById('display').value = '';
}
