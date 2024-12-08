import express from 'express';
import cors from 'cors';
import scheduleRoute from './routes/scheduleRoute';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Recipe Finder Backend!');
});

app.use('/api/schdule', scheduleRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});