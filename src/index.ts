//imports
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import api from './routes/api.routes';

const PORT = process.env.PORT || 3001;
const app = express();

//middlewares
app.use(cors());

//routes
app.use('/api', api);

//start server
app.listen(PORT, () => console.log('Server on port', PORT));
