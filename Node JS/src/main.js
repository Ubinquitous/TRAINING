const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const models = require('./database/models');

dotenv.config();
const app = express();

models.sequelize.sync({ force: false })
    .then(() => {
        console.log('complete db connecting');
    })
    .catch((err) => {
        console.log(`err :: ${err}`);
    })

const controller = require('./controller');
app.use('/', controller);

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('Error')
})

app.use(cors());
app.use(express.json());

app.listen(8000);