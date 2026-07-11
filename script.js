let valorAtual = '';
let operador = '';
let valorAnterior = '';
let resultado = '';

function adicionarValor(valor) {
    if (resultado !== '') {
        limpar();
    }
    valorAtual += valor.toString();
    document.getElementById('display').value = valorAtual;
}

function adicionarOperador(oper) {
    if (valorAtual !== '') {
        valorAnterior = valorAtual;
        operador = oper;
        valorAtual = '';
        document.getElementById('display').value = '';
    }
}

function adicionarPonto() {
    if (!valorAtual.includes('.')) {
        valorAtual += '.';
        document.getElementById('display').value = valorAtual;
    }
}

function calcular() {
    if (valorAtual !== '' && valorAnterior !== '') {
        let resultadoTemp;
        switch (operador) {
            case '+':
                resultadoTemp = parseFloat(valorAnterior) + parseFloat(valorAtual);
                break;
            case '-':
                resultadoTemp = parseFloat(valorAnterior) - parseFloat(valorAtual);
                break;
            case '*':
                resultadoTemp = parseFloat(valorAnterior) * parseFloat(valorAtual);
                break;
            case '/':
                resultadoTemp = parseFloat(valorAnterior) / parseFloat(valorAtual);
                break;
            default:
                resultadoTemp = valorAtual;
        }
        resultado = resultadoTemp.toString();
        document.getElementById('display').value = resultado;
        valorAtual = '';
        valorAnterior = '';
        operador = '';
    }
}

function calcularSen() {
    if (valorAtual !== '') {
        let resultadoTemp = Math.sin(parseFloat(valorAtual) * Math.PI / 180);
        resultado = resultadoTemp.toString();
        document.getElementById('display').value = resultado;
        valorAtual = '';
    }
}

function calcularCos() {
    if (valorAtual !== '') {
        let resultadoTemp = Math.cos(parseFloat(valorAtual) * Math.PI / 180);
        resultado = resultadoTemp.toString();
        document.getElementById('display').value = resultado;
        valorAtual = '';
    }
}

function calcularTan() {
    if (valorAtual !== '') {
        let resultadoTemp = Math.tan(parseFloat(valorAtual) * Math.PI / 180);
        resultado = resultadoTemp.toString();
        document.getElementById('display').value = resultado;
        valorAtual = '';
    }
}

function calcularLog() {
    if (valorAtual !== '') {
        let resultadoTemp = Math.log10(parseFloat(valorAtual));
        resultado = resultadoTemp.toString();
        document.getElementById('display').value = resultado;
        valorAtual = '';
    }
}

function calcularRaiz() {
    if (valorAtual !== '') {
        let resultadoTemp = Math.sqrt(parseFloat(valorAtual));
        resultado = resultadoTemp.toString();
        document.getElementById('display').value = resultado;
        valorAtual = '';
    }
}

function limpar() {
    valorAtual = '';
    valorAnterior = '';
    operador = '';
    resultado = '';
    document.getElementById('display').value = '';
}
