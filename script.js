let valorAtual = '';
let operador = '';
let valorAnterior = '';
let resultado = '';
let reconhecimentoVoz = null;

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

function iniciarReconhecimentoVoz() {
    if (reconhecimentoVoz === null) {
        reconhecimentoVoz = new webkitSpeechRecognition();
        reconhecimentoVoz.lang = 'pt-BR';
        reconhecimentoVoz.maxResults = 10;
        reconhecimentoVoz.onresult = eventoReconhecimentoVoz;
        reconhecimentoVoz.start();
    }
}

function eventoReconhecimentoVoz(evento) {
    let textoReconhecido = evento.results[0][0].transcript;
    textoReconhecido = textoReconhecido.toLowerCase();
    if (textoReconhecido.includes('sete')) {
        adicionarValor(7);
    } else if (textoReconhecido.includes('oito')) {
        adicionarValor(8);
    } else if (textoReconhecido.includes('nove')) {
        adicionarValor(9);
    } else if (textoReconhecido.includes('quatro')) {
        adicionarValor(4);
    } else if (textoReconhecido.includes('cinco')) {
        adicionarValor(5);
    } else if (textoReconhecido.includes('seis')) {
        adicionarValor(6);
    } else if (textoReconhecido.includes('um')) {
        adicionarValor(1);
    } else if (textoReconhecido.includes('dois')) {
        adicionarValor(2);
    } else if (textoReconhecido.includes('três')) {
        adicionarValor(3);
    } else if (textoReconhecido.includes('zero')) {
        adicionarValor(0);
    } else if (textoReconhecido.includes('mais')) {
        adicionarOperador('+');
    } else if (textoReconhecido.includes('menos')) {
        adicionarOperador('-');
    } else if (textoReconhecido.includes('vezes')) {
        adicionarOperador('*');
    } else if (textoReconhecido.includes('dividir')) {
        adicionarOperador('/');
    } else if (textoReconhecido.includes('igual')) {
        calcular();
    } else if (textoReconhecido.includes('seno')) {
        calcularSen();
    } else if (textoReconhecido.includes('cosseno')) {
        calcularCos();
    } else if (textoReconhecido.includes('tangente')) {
        calcularTan();
    } else if (textoReconhecido.includes('logaritmo')) {
        calcularLog();
    } else if (textoReconhecido.includes('raiz')) {
        calcularRaiz();
    } else if (textoReconhecido.includes('limpar')) {
        limpar();
    }
    reconhecimentoVoz = null;
}
