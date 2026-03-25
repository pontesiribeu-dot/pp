export const log = (...args) => {
  console.log(new Date().toISOString(), ...args);
};

export const info = (...args) => log('[INFO]', ...args);
export const warn = (...args) => log('[WARN]', ...args);
export const error = (...args) => log('[ERROR]', ...args);
