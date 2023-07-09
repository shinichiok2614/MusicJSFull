import viewEngine from './config/viewEngine';
import initWebRouter from './route/web';
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB';

require('dotenv').config();
let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

viewEngine(app);
initWebRouter(app);

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
	console.log('Backend Nodejs is running on the port: ' + port);
});
