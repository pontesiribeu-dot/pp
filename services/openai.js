import config from '../config/config.js';

let client = null;

if (config.openai.apiKey) {
  const OpenAI = (await import('openai')).default;
  client = new OpenAI({ apiKey: config.openai.apiKey });
}

const defaultPrompt = (type) => `Crie uma legenda persuasiva para venda de móveis planejados no formato:
- Dor
- Desejo
- CTA: ${config.whatsappCTA}
- Tipo de post: ${type}
- Linguagem: simples, direta, focada em geração de clientes.`;

export const generateCaption = async ({ type, scenario }) => {
  if (!client) {
    return `${scenario} - Transforme seu ambiente com móveis planejados. ${config.whatsappCTA}`;
  }

  const prompt = `${defaultPrompt(type)}\nContexto: ${scenario}`;

  const response = await client.messages.create({
    model: 'gpt-4o-mini',
    max_tokens: 250,
    messages: [{ role: 'user', content: prompt }],
  });

  return response.content?.[0]?.text?.trim() || `${scenario} - Móveis planejados de alto valor. ${config.whatsappCTA}`;
};

export const generateImagePrompt = ({ type, detail }) => {
  const prompt = `Imagem realista de móveis planejados ${type} ${detail}. Alta qualidade, ambientes residenciais, iluminação natural, cenário emocional, 1:1.`;
  return prompt;
};
