import './config/config.js';
import { scheduleDailyPosts } from './utils/scheduler.js';
import { info, error } from './utils/logger.js';
import { runSocialAgent } from './agents/social.js';

const start = async () => {
  info('🤖 Iniciando PONTES PLANEJADOS Social Bot');
  info('Agendamento automático: 09:00, 13:00, 19:00');

  scheduleDailyPosts(async () => {
    try {
      await runSocialAgent();
      info('✅ Pipeline concluído com sucesso');
    } catch (err) {
      error('❌ Erro na execução do agente social', err.message || err);
    }
  });

  info('✨ Sistema iniciado. Aguardando horários agendados...');
};

start().catch((err) => {
  error('Erro ao iniciar o sistema', err.message || err);
  process.exit(1);
});
