const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const nunjucks = require('nunjucks');
const models = require('./database/models');

const indexRouter = require('./src/index');
const commentRouter = require('./src/comments');
const userRouter = require('./src/users');

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
        console.log(`err :: ${err}`);
    })


app.use('/', indexRouter);
app.use('/comment', commentRouter);
app.use('/user', userRouter);

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