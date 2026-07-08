const express = require('express');
const router = express.Router();
const redacaoService = require('../services/redacaoService');
const { validarTexto } = require('../middleware/validation');

// POST /api/redacao/avaliar
router.post('/avaliar', validarTexto, async (req, res) => {
  try {
    const { texto } = req.body;
    const resultado = redacaoService.avaliarRedacao(texto);
    redacaoService.salvarHistorico(resultado);
    res.json(resultado);
  } catch (err) {
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

// GET /api/redacao/historico
router.get('/historico', async (req, res) => {
  try {
    const historico = redacaoService.getHistorico();
    res.json(historico);
  } catch (err) {
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

module.exports = router;
``
