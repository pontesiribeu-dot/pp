import { runSocialAgent } from './agents/social.js';
import { info, error } from './utils/logger.js';

(async () => {
  try {
    info('Gerando post de teste...');
    const result = await runSocialAgent();
    info('Post gerado com sucesso em modo MOCK');
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    error('Erro ao gerar post', err.message);
    process.exit(1);
  }
})();
