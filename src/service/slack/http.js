import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();

app.use(bodyParser.json({ type: '*/json', strict: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    message: 'The requested resource was not found',
  });
});

app.use((err, req, res) => {
  console.error(err.stack);
  const message = process.env.NODE_ENV === 'production'
    ? 'Something went wrong, we\'re looking into it...'
    : err.stack;
  res.status(500).send({
    status: 500,
    message,
  });
});

app.listen(8765, () => console.log('Example app listening on port 8765  !'));
