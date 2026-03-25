export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const randomDelay = (minMs, maxMs) => {
  const ms = Math.floor(Math.random() * (maxMs - minMs + 1) + minMs);
  return delay(ms);
};
