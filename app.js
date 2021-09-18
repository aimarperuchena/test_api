const express = require('express');
const app = express();
const router = express.Router();
const indexRouter=require('./routes/index');
const path = __dirname + '/views/';
const port = 8080;

app.use(express.static(path));
app.use('/', indexRouter);
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
  })