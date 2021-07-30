import express from 'express';
const app = express();
import path from 'path';
import morgan from 'morgan';
import methodOverride from 'method-override'
import route from './server/routes/router.js'
import connectDB from  './server/databse/DB_connection.js';
import dotenv from 'dotenv'
dotenv.config({ path: 'config.env' });
const { UM_PORT } = process.env;

const __dirname = path.resolve();
// log requests
app.use(morgan("tiny"))

// parse request to bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');



// load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

// method override
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// connect to database
connectDB();

// load routers
app.use('/', route);

app.listen(UM_PORT, () => {
  console.log(`Server running fast on PORT ${UM_PORT}`);
});
