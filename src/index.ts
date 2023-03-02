//imports
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3001;
const app = express();

//middlewares
app.use(cors());

//routes
import api from './routes/api.routes';
import views from './routes/views.routes';
app.use(api);
app.use(views);

//start server
app.listen(PORT, () => console.log('Server on port', PORT));

//static files
app.use(express.static(__dirname + '/public'));
