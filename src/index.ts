import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});