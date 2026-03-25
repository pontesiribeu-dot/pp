import { TwitterApi } from 'twitter-api-v2';
import config from '../config/config.js';
import { log, warn } from '../utils/logger.js';
import { retry } from '../utils/retry.js';

const mock = !config.twitter.apiKey || !config.twitter.apiSecret;
let twitterClient;

if (!mock) {
  twitterClient = new TwitterApi({
    appKey: config.twitter.apiKey,
    appSecret: config.twitter.apiSecret,
    accessToken: config.twitter.accessToken,
    accessSecret: config.twitter.accessSecret,
  });
}

export const postToTwitter = async ({ message, imageUrl }) => {
  if (mock) {
    log('[TWITTER] MOCK post', message);
    return { status: 'mock', platform: 'twitter' };
  }

  const postTweet = async () => {
    if (imageUrl) {
      const mediaId = await twitterClient.v1.uploadMedia(imageUrl, { type: 'png' });
      return twitterClient.v2.tweet(message, { media: { media_ids: [mediaId] } });
    }
    return twitterClient.v2.tweet(message);
  };

  try {
    const result = await retry(postTweet, 3, 2000);
    log('[TWITTER] publicado com sucesso', result);
    return result;
  } catch (error) {
    warn('[TWITTER] falha ao publicar', error.message);
    throw error;
  }
};
