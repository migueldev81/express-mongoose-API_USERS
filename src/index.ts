//imports
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3001;
const app = express();

//middlewares
app.use(cors());

//routes
import items from './routes/item.routes';
app.use(items);

//start server
app.listen(PORT, () => console.log('Server on port', PORT));
