#!/usr/bin/env node

import readline from 'readline';
import fs from 'fs';
import path from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const loadEnv = () => {
  const envPath = '.env';
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8');
    return Object.fromEntries(
      content
        .split('\n')
        .filter((line) => line && !line.startsWith('#'))
        .map((line) => line.split('='))
    );
  }
  return {};
};

const saveEnv = (env) => {
  const envPath = '.env';
  const content = Object.entries(env)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
  fs.writeFileSync(envPath, content, 'utf-8');
  console.log('✅ .env atualizado com sucesso!\n');
};

const main = async () => {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  🔐 PONTES PLANEJADOS — Setup de Credenciais');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const env = loadEnv();

  // OpenAI (já existe)
  console.log('✓ OpenAI API Key (já configurado)\n');

  // Instagram
  console.log('📱 INSTAGRAM — https://www.instagram.com/pontes_planejados/\n');
  console.log('Como obter credenciais:');
  console.log('1. Acesse: https://developers.facebook.com');
  console.log('2. Na App > Graph API Explorer');
  console.log('3. Execute: GET /me/instagram_business_account\n');

  const igPageId = await question('Cole seu INSTAGRAM_PAGE_ID: ');
  const igToken = await question('Cole seu INSTAGRAM_ACCESS_TOKEN: ');

  // Facebook
  console.log('\n📘 FACEBOOK — https://www.facebook.com/?locale=pt_BR\n');
  console.log('Como obter credenciais:');
  console.log('1. Acesse: https://developers.facebook.com');
  console.log('2. Ferramentas > Access Token Tool');
  console.log('3. Selecione sua página Facebook\n');

  const fbPageId = await question('Cole seu FACEBOOK_PAGE_ID: ');
  const fbToken = await question('Cole seu FACEBOOK_ACCESS_TOKEN: ');

  // Twitter
  console.log('\n𝕏 TWITTER/X — https://x.com/ponets97575\n');
  console.log('Como obter credenciais:');
  console.log('1. Acesse: https://developer.twitter.com/en/portal/dashboard');
  console.log('2. Keys and tokens > Regenerate\n');

  const twApiKey = await question('Cole seu TWITTER_API_KEY: ');
  const twApiSecret = await question('Cole seu TWITTER_API_SECRET: ');
  const twAccessToken = await question('Cole seu TWITTER_ACCESS_TOKEN: ');
  const twAccessSecret = await question('Cole seu TWITTER_ACCESS_SECRET: ');

  // Salvar
  const newEnv = {
    ...env,
    INSTAGRAM_PAGE_ID: igPageId,
    INSTAGRAM_ACCESS_TOKEN: igToken,
    FACEBOOK_PAGE_ID: fbPageId,
    FACEBOOK_ACCESS_TOKEN: fbToken,
    TWITTER_API_KEY: twApiKey,
    TWITTER_API_SECRET: twApiSecret,
    TWITTER_ACCESS_TOKEN: twAccessToken,
    TWITTER_ACCESS_SECRET: twAccessSecret,
  };

  saveEnv(newEnv);

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✨ Configuração completa!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('Próximo passo: npm start\n');

  rl.close();
};

main();
