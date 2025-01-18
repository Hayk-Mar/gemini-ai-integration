import express, { Application } from 'express';
import bodyParser from 'body-parser';
import chatRoutes from './routes/chat.routes';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use('/api/chat', chatRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
