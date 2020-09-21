const express = require('express');
var xss = require("xss");
const bodyParser = require('body-parser');
const routes = require('./routes/r_home');
const db = require('./config/db');
const app = express();
// const xssFilters = require('xss-filters');
const helmet = require('helmet');

app.use(express.static(__dirname + 'public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet({
    referrerPolicy: { policy: "no-referrer" },contentSecurityPolicy: false,
}));
const port = 5000;

app.use('/', routes);
db.connect();

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
