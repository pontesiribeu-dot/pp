# 🚀 PONTES PLANEJADOS — Social Bot Automático

Sistema de geração e postagem automática de conteúdo em redes sociais para móveis planejados.

---

## 📋 Quick Start

### 1️⃣ Clone e instale
```bash
git clone https://github.com/pontesiribeu-dot/pp.git
cd pp
npm install
```

### 2️⃣ Configure suas redes sociais
```bash
node setup-credentials.js
```

Este script vai guiar você para:
- ✅ Instagram: `https://www.instagram.com/pontes_planejados/`
- ✅ Facebook: `https://www.facebook.com/` (sua página)
- ✅ Twitter/X: `https://x.com/ponets97575`

### 3️⃣ Inicie o bot
```bash
npm start
```

O sistema agora posta automaticamente às **09:00**, **13:00** e **19:00** todos os dias.

---

## 🎯 O que acontece automaticamente

**Cada postagem gera:**
1. ✍️ Legenda inteligente (IA com OpenAI)
2. 🖼️ Imagem realista (IA geradora)
3. 📱 Postagem em Instagram
4. 📘 Postagem em Facebook
5. 𝕏 Postagem em Twitter/X

**Conteúdo variado:**
- Antes e depois
- Transformação de ambientes
- Dicas de organização
- Prova social (testemunhas)
- Ofertas com urgência

**Cada legenda inclui:**
- Dor (problema do cliente)
- Desejo (solução bonita)
- CTA (Chama no WhatsApp para projeto grátis)

---

## 🔑 Credenciais Necessárias

Seu `OPENAI_API_KEY` já está configurado ✓

Para as redes, você precisa de tokens de acesso oficial via:

### Instagram & Facebook
- [Facebook Developers](https://developers.facebook.com)
- Graph API Explorer
- Gere token de longa duração

### Twitter/X
- [Twitter Developer Portal](https://developer.twitter.com)
- Keys and tokens
- Permissões: Tweet Creation + Media Upload

---

## 📁 Estrutura do Projeto

```
/agents           → Agentes inteligentes (social.js)
/services         → Integrações com APIs
/utils            → Helpers (cron, retry, logger, etc)
/config           → Configurações centralizadas
.env              → Credenciais (nunca commitar!)
index.js          → Entrada principal
setup-credentials.js → Wizard de configuração
test-post.js      → Testa gerando 1 post
```

---

## 🧪 Testar antes de produção

Gere um post de teste:
```bash
node test-post.js
```

Se vir sucesso (não mock), está pronto para produção!

---

## 📊 Logs e Monitoramento

Todos os eventos são registrados com timestamp:
- ✅ Posts gerados com sucesso
- ❌ Erros de autenticação
- 🔄 Retries automáticos
- ⏱️ Horários executados

---

## 🆘 Troubleshooting

**Erro: "OPENAI_API_KEY is missing"**
- Verifique se `.env` contém sua chave OpenAI

**Erro: "Instagram token inválido"**
- Regenere o token em Facebook Developers
- Certifique-se que a página Instagram está vinculada

**Erro: "Rate limit exceeded"**
- Sistema já inclui delays de 2-5s entre plataformas
- Se persistir, espere e reinicie

---

## 📌 Notas

- Sistema funciona 24/7 após `npm start`
- Horários podem ser customizados em `config/config.js`
- Conteúdo pode ser ajustado em `agents/social.js`
- Modo "mock" ativa se credenciais faltarem (seguro)

---

## 🔐 Segurança

- Nunca commite `.env` com credenciais reais
- `.gitignore` já está configurado
- Use tokens de longa duração da Meta/Twitter
- Regenere periodicamente por segurança

---

## 🎉 Boa sorte!

Seu sistema está pronto para gerar leads automáticamente.

🌟 **Dúvidas?** Consulte [SETUP.md](./SETUP.md)

**Passo 2 — Sirva localmente** (no terminal):

```bash
npx serve squads/<nome-do-squad>/dashboard
```

**Passo 3 —** Abra `http://localhost:3000` no seu navegador.

---

# Opensquad (English)

Create AI squads that work together — right from your IDE.

## How to Use

Open this folder in your IDE and type:

```
/opensquad
```

This opens the main menu. From there you can create squads, run them, and more.

You can also be direct — describe what you want in plain language:

```
/opensquad create a squad for writing LinkedIn posts about AI
/opensquad run my-squad
```

## Create a Squad

Type `/opensquad` and choose "Create squad" from the menu, or be direct:

```
/opensquad create a squad for [what you need]
```

The Architect will ask a few questions, design the squad, and set everything up automatically.

## Run a Squad

Type `/opensquad` and choose "Run squad" from the menu, or be direct:

```
/opensquad run the <squad-name> squad
```

The squad runs automatically, pausing only at decision checkpoints.

## Virtual Office

The Virtual Office is a 2D visual interface that shows your agents working in real time.

**Step 1 — Generate the dashboard** (in your IDE):

```
/opensquad dashboard
```

**Step 2 — Serve it locally** (in terminal):

```bash
npx serve squads/<squad-name>/dashboard
```

**Step 3 —** Open `http://localhost:3000` in your browser.
