import express from 'express';
import createError from 'http-errors';
import morgan from 'morgan';
import {config} from 'dotenv';
import routerPage from "./routes/api.route.js"
import uiIndex from "./routes/ui.route.js"

config();


const app = express();
app.use(express.json());

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(morgan('common'));

app.use('/', uiIndex);
app.use('/api', routerPage);

app.use((req, res, next) => {
    next(createError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
});

app.listen(3000, () => console.log(`🚀 @ http://localhost:${3000}`));
