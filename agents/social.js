import config from '../config/config.js';
import { generateCaption, generateImagePrompt } from '../services/openai.js';
import { createImage } from '../services/image.js';
import { postToInstagram } from '../services/instagram.js';
import { postToFacebook } from '../services/facebook.js';
import { postToTwitter } from '../services/twitter.js';
import { randomDelay } from '../utils/delay.js';
import { info, warn } from '../utils/logger.js';

const contentTypes = [
  'Antes e depois',
  'Transformação de ambientes',
  'Dicas de organização',
  'Prova social',
  'Ofertas com urgência',
];

const scenarios = {
  'Antes e depois': 'Projeto de cozinha com móveis planejados antes e depois da reforma',
  'Transformação de ambientes': 'Sala de estar com móvel planejado integrado e moderno',
  'Dicas de organização': 'Guia prático de organização de armários planejados para casas pequenas',
  'Prova social': 'Depoimento de cliente satisfeito com móvel planejado residencial',
  'Ofertas com urgência': 'Promoção limitada de móveis planejados com 20% OFF',
};

const getRandomType = () => contentTypes[Math.floor(Math.random() * contentTypes.length)];

const generateVariantCTA = () => {
  const base = config.whatsappCTA;
  const variations = [
    base,
    `${base} - Vagas limitadas para este mês`,
    `Fale agora e garanta visita técnica gratuita: ${base}`,
  ];
  return variations[Math.floor(Math.random() * variations.length)];
};

export const runSocialAgent = async () => {
  const type = getRandomType();
  const scenario = scenarios[type];
  const cta = generateVariantCTA();

  const caption = await generateCaption({ type, scenario: `${scenario} ${cta}` });
  const imagePrompt = generateImagePrompt({ type, detail: scenario });
  const imageUrl = await createImage({ type, detail: imagePrompt });

  info('Gerado post', { type, scenario, cta, imageUrl });

  const fullCaption = `${caption}\n\n${cta}`;

  try {
    const ig = await postToInstagram({ imageUrl, caption: fullCaption });
    await randomDelay(2000, 5000);

    const fb = await postToFacebook({ imageUrl, message: fullCaption });
    await randomDelay(2000, 5000);

    const tw = await postToTwitter({ message: fullCaption, imageUrl: undefined });
    await randomDelay(2000, 5000);

    info('Publicações finalizadas', { ig, fb, tw });
    return { ig, fb, tw };
  } catch (err) {
    warn('Erro no pipeline de postagem', err.message);
    throw err;
  }
};
