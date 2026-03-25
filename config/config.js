import dotenv from 'dotenv';
dotenv.config();

const config = {
  companyName: 'PONTES PLANEJADOS',
  whatsappCTA: 'Chama no WhatsApp para projeto grátis',
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '',
  },
  instagram: {
    pageId: process.env.INSTAGRAM_PAGE_ID || '',
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN || '',
  },
  facebook: {
    pageId: process.env.FACEBOOK_PAGE_ID || '',
    accessToken: process.env.FACEBOOK_ACCESS_TOKEN || '',
  },
  twitter: {
    apiKey: process.env.TWITTER_API_KEY || '',
    apiSecret: process.env.TWITTER_API_SECRET || '',
    accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
    accessSecret: process.env.TWITTER_ACCESS_SECRET || '',
  },
  schedule: {
    times: ['09:00', '13:00', '19:00'],
  },
  antiBlock: {
    minDelayMs: 2000,
    maxDelayMs: 5000,
    maxRetries: 3,
  },
};

export default config;
