const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/r_home');
const db = require('./config/db');
const app = express();

app.use(express.static(__dirname + 'public'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 5000;

app.use('/', routes);

//connect to DB 
db.connect();


app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
