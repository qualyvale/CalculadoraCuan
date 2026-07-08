const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const redacaoRoutes = require('./routes/redacao');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/redacao', redacaoRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
});
