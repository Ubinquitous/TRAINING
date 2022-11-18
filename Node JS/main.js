const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const indexRouter = require('./router/index');
const boardRouter = require('./router/board');

dotenv.config();
const app = express();

app.use('/', indexRouter);
app.use('/board', boardRouter)

app.use(cors());
app.use(express.json());

app.listen(8000);