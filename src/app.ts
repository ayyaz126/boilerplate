import express from 'express';
import routes from './routes';
import { errorMiddleware } from './shared/middleware/error.middleware';

export const app = express();

app.use(express.json());
app.use('/api', routes);
app.use(errorMiddleware);
