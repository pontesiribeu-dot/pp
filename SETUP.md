# 🚀 PONTES PLANEJADOS — Guia de Configuração de APIs

Seu sistema está pronto! Agora configure os IDs e tokens das suas redes sociais.

---

## 📱 INSTAGRAM — `https://www.instagram.com/pontes_planejados/`

### Obter Page ID e Access Token:

1. Acesse [Facebook Developers](https://developers.facebook.com)
2. Crie uma App (Business App) ou use uma existente
3. Adicione produto **Instagram Graph API**
4. Vá para **Configurações > Básico** e anote seu **App ID**
5. Vá para **Graph API Explorer**
6. Selecione sua **Page do Facebook** (vinculada ao Instagram)
7. Em "User or Page", selecione sua página Facebook
8. Clique "Generate Access Token"
9. Copie o token (INSTAGRAM_ACCESS_TOKEN)
10. Execute no Graph API Explorer:
    ```
    GET /me/instagram_business_account
    ```
    Isso retorna seu **INSTAGRAM_PAGE_ID**

### Arquivo `.env`:
```
INSTAGRAM_PAGE_ID=seu_page_id_aqui
INSTAGRAM_ACCESS_TOKEN=seu_token_aqui
```

---

## 📘 FACEBOOK — `https://www.facebook.com/?locale=pt_BR`

### Obter Page ID e Access Token:

1. Acesse [Facebook Developers](https://developers.facebook.com)
2. Na mesma App, adicione produto **Facebook Login**
3. Vá para **Ferramentas > Access Token Tool**
4. Selecione sua **Página Facebook**
5. Gere um token de longa duração
6. Seu **FACEBOOK_PAGE_ID** é visível na URL: `facebook.com/seu_page_id`

### Arquivo `.env`:
```
FACEBOOK_PAGE_ID=seu_page_id_aqui
FACEBOOK_ACCESS_TOKEN=seu_token_aqui
```

---

## 𝕏 TWITTER/X — `https://x.com/ponets97575`

### Obter Credenciais:

1. Acesse [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Crie uma App (ou use existente)
3. Vá para **Keys and tokens**
4. Gere/copie:
   - **API Key** → `TWITTER_API_KEY`
   - **API Secret** → `TWITTER_API_SECRET`
   - **Access Token** → `TWITTER_ACCESS_TOKEN`
   - **Access Token Secret** → `TWITTER_ACCESS_SECRET`

**⚠️ IMPORTANTE**: Suas credenciais precisam ter permissão para **Tweet Creation** e **Media Upload**.

### Arquivo `.env`:
```
TWITTER_API_KEY=sua_api_key_aqui
TWITTER_API_SECRET=sua_api_secret_aqui
TWITTER_ACCESS_TOKEN=seu_access_token_aqui
TWITTER_ACCESS_SECRET=seu_access_secret_aqui
```

---

## ✅ Checklist Final

- [ ] OpenAI API Key já está configurada ✓
- [ ] Instagram PAGE_ID e TOKEN
- [ ] Facebook PAGE_ID e TOKEN
- [ ] Twitter/X: API Key, Secret, Access Token, Access Secret
- [ ] Arquivo `.env` preenchido completamente
- [ ] Rodou `npm install` (já feito ✓)
- [ ] Rodou `npm start` (sistema aguarda horários: 09:00, 13:00, 19:00)

---

## 🧪 Testar Antes de Produção

Depois de preencher `.env`, teste gerando um post:

```bash
node test-post.js
```

Se vir logs de **sucesso (não mock)**, parabéns! Sistema está pronto para produção.

---

## 📌 Notas Importantes

- **Timestamps**: Posts saem automaticamente às **09:00**, **13:00** e **19:00** (hora do servidor)
- **Modo Mock**: Se alguma credencial faltar, sistema simula post em modo seguro (sem enviar)
- **Rate Limiting**: Delays de 2-5s entre plataformas para evitar bloqueios
- **Logs**: Tudo é registrado com timestamps no console

---

## 🆘 Suporte

Se precisar ajudar:
- Verifique se todos os tokens têm **permissões corretas**
- Certifique-se de que as **páginas/contas estão vinculadas** corretamente
- Tente regenerar tokens se houver erros de autenticação

**Boa sorte! 🚀**
