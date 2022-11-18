const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const nunjucks = require('nunjucks');
const models = require('./database/models');

const main = require('./src/index');
const board = require('./src/board');

dotenv.config();
const app = express();
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

models.sequelize.sync({ force: false })
    .then(() => {
        console.log('complete db connecting');
    })
    .catch((err) => {
        console.log(`err : ${err}`);
    })


app.use('/', main);
app.use('/board', board);

app.use((req, res, next) => {
    const err = new Error(`${req.method} ${req.url} Router is not defined`);
    err.status = 404;
    next(err);
})
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('Error')
})

app.use(cors());
app.use(express.json());

app.listen(8000);