import cron from 'cron';
import config from '../config/config.js';
import { info } from './logger.js';

export const scheduleDailyPosts = (jobFn) => {
  const jobs = [];
  for (const time of config.schedule.times) {
    const [hour, minute] = time.split(':').map(Number);
    const cronTime = `${minute} ${hour} * * *`;
    const job = new cron.CronJob(cronTime, async () => {
      info(`Iniciando pipeline de postagem do horário ${time}`);
      await jobFn();
    });
    job.start();
    jobs.push({ time, job });
    info(`Agendado cron para ${time}`);
  }
  return jobs;
};
