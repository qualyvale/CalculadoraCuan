/**
 * Middleware para validar o campo "texto" no body da requisição
 * Rejeita se estiver vazio ou com menos de 30 caracteres
 */
function validarTexto(req, res, next) {
  const texto = req.body?.texto || '';
  if (typeof texto !== 'string' || texto.trim().length < 30) {
    return res.status(400).json({
      erro: 'Campo "texto" deve ter ao menos 30 caracteres.',
    });
  }
  next();
}

module.exports = { validarTexto };
