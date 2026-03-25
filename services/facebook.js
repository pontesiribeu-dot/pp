import axios from 'axios';
import config from '../config/config.js';
import { retry } from '../utils/retry.js';
import { log, warn } from '../utils/logger.js';

export const postToFacebook = async ({ imageUrl, message }) => {
  if (!config.facebook.accessToken || !config.facebook.pageId) {
    log('[FACEBOOK] MOCK post publicação:', message);
    return { status: 'mock', platform: 'facebook' };
  }

  const postFn = async () => {
    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${config.facebook.pageId}/photos`,
      null,
      {
        params: {
          url: imageUrl,
          caption: message,
          access_token: config.facebook.accessToken,
        },
      }
    );
    return response.data;
  };

  try {
    const result = await retry(postFn, 3, 2000);
    log('[FACEBOOK] publicado com sucesso', result);
    return result;
  } catch (error) {
    warn('[FACEBOOK] falha ao publicar', error.message);
    throw error;
  }
};
