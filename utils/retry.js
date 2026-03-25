import { delay } from './delay.js';

export const retry = async (fn, attempts = 3, delayMs = 1000) => {
  let lastError;
  for (let i = 1; i <= attempts; i += 1) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (i === attempts) break;
      await delay(delayMs);
    }
  }
  throw lastError;
};
