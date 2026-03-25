import axios from 'axios';
import config from '../config/config.js';
import { info, warn } from '../utils/logger.js';

export const createImage = async ({ type, detail }) => {
  if (!config.openai.apiKey) {
    info('Modo MOCK image: gerando caminho local falso');
    return `mock-images/${type.replace(/\s+/g, '-')}-${Date.now()}.png`;
  }

  const prompt = `Crie imagem realista de móveis planejados ${type}, ${detail}, composição profissional.`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/edits',
      {
        prompt,
        size: '1024x1024',
      },
      {
        headers: {
          Authorization: `Bearer ${config.openai.apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const imageUrl = response.data.data?.[0]?.url;
    if (!imageUrl) throw new Error('OpenAI image retornou sem URL');

    return imageUrl;
  } catch (error) {
    warn('Falha geração de imagem, usando mock', error.message);
    return `mock-images/${type.replace(/\s+/g, '-')}-${Date.now()}.png`;
  }
};
