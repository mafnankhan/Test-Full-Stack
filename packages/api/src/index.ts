import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import throng from 'throng';

const WORKERS = process.env.WEB_CONCURRENCY || 1;
const settings = require('./lib/settings');
const routes = require('./routes')

async function start(id: any) {
  const app = express();

  app.use(
    cors({
      origin: true,
    }),
  );

  app.use(bodyParser.json());

  app.use('/', routes);
  
  app.listen({ port: settings.port }, () => {
    console.log(`Worker ${id}`);
    console.log(`🚀 Server ready at http://localhost:${settings.port}`);
  });
}

if (settings.env !== 'test') {
  throng({
    workers: WORKERS,
    lifetime: Infinity,
    start,
  });
}
