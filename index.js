import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from "path";
const app = express()
import { fileURLToPath } from 'url';

//define filename and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//HTTP logger
app.use(morgan('combined'));

app.use(express.static('public'));

//Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/feature', (req, res) => {
    res.render('feature')
})

app.listen(3000)