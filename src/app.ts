import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { UserRoute } from './app/module/User/Userroute';

// parser
app.use(express.json());
app.use(cors());



app.use('/api', UserRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('User collections!');
});

export default app;
