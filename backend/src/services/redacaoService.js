/**
 * Serviço de redação — armazena e avalia textos em memória
 * (substitua por banco de dados quando quiser persistir)
 */
const historico = [];

/**
 * Regra de avaliação BEM simplificada: pontua 0-100
 * — +20 pts se > 1200 caracteres
 * — +20 pts se contém introdução (palavra-chave “introdução”)
 * — +20 pts se contém conclusão (palavra-chave “conclusão”)
 * — +40 pts base
 */
function avaliarRedacao(texto = '') {
  const len = texto.trim().length;
  let nota = 40;
  if (len > 1200) nota += 20;
  if (/introdução/i.test(texto)) nota += 20;
  if (/conclusão/i.test(texto)) nota += 20;

  return {
    texto,
    caracteres: len,
    nota,
    data: new Date().toISOString(),
  };
}

function salvarHistorico(registro) {
  historico.unshift(registro);
  if (historico.length > 100) historico.pop(); // limita a 100 entradas
}

function getHistorico() {
  return historico;
}

module.exports = { avaliarRedacao, salvarHistorico, getHistorico };
