import axios from 'axios';
import config from '../config/config.js';
import { retry } from '../utils/retry.js';
import { log, warn } from '../utils/logger.js';

export const postToInstagram = async ({ imageUrl, caption }) => {
  if (!config.instagram.accessToken || !config.instagram.pageId) {
    log('[INSTAGRAM] MOCK post publicação:', caption);
    return { status: 'mock', platform: 'instagram' };
  }

  const publishMedia = async () => {
    const creationResponse = await axios.post(
      `https://graph.facebook.com/v17.0/${config.instagram.pageId}/media`,
      null,
      {
        params: {
          image_url: imageUrl,
          caption,
          access_token: config.instagram.accessToken,
        },
      }
    );

    const creationId = creationResponse.data.id;
    const publishResponse = await axios.post(
      `https://graph.facebook.com/v17.0/${config.instagram.pageId}/media_publish`,
      null,
      {
        params: {
          creation_id: creationId,
          access_token: config.instagram.accessToken,
        },
      }
    );

    return publishResponse.data;
  };

  try {
    const result = await retry(publishMedia, 3, 2000);
    log('[INSTAGRAM] publicado com sucesso', result);
    return result;
  } catch (error) {
    warn('[INSTAGRAM] falha ao publicar', error.message);
    throw error;
  }
};
