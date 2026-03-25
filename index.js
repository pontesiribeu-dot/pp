import './config/config.js';
import express from 'express';
import { scheduleDailyPosts } from './utils/scheduler.js';
import { info, error } from './utils/logger.js';
import { runSocialAgent } from './agents/social.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', system: 'PONTES PLANEJADOS Social Bot' });
});

app.post('/api/post-now', async (req, res) => {
  try {
    info('Webhook /api/post-now acionado');
    const result = await runSocialAgent();
    res.status(200).json({ status: 'posted', result });
  } catch (err) {
    error('Erro em /api/post-now', err.message || err);
    res.status(500).json({ status: 'error', message: err.message || String(err) });
  }
});

const start = async () => {
  info('Iniciando PONTES PLANEJADOS Social Bot');

  scheduleDailyPosts(async () => {
    try {
      await runSocialAgent();
      info('Pipeline concluído com sucesso');
    } catch (err) {
      error('Erro na execução do agente social', err.message || err);
    }
  });

  app.listen(PORT, () => {
    info(`Servidor HTTP em execução na porta ${PORT}`);
  });

  info('Agendamentos diários ativos. Sistema rodando.');
};

start().catch((err) => {
  error('Erro ao iniciar o sistema', err.message || err);
  process.exit(1);
});
