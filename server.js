const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const conf = require('./config')
const routes = require('./route');
const app = express();
const db = require('./utils/dbHelper');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes.appRoutes(app);
app.listen(conf.port, () => {
    console.log(`Listening to requests on ${conf.host}${conf.port}`);
});
db.initDB();