const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');

const { Jobs, Users } = require('./setupDatabase');

const app = express();

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Middlewares
app.use(cors());
app.use(morgan('dev'));

//Test route
app.get('/', function (req, res) {
    res.send('Hello its working');
});

//Jobs route
app.get('/jobs', function (req, res) {
    try {
        res.send(JSON.stringify(Jobs.find()))
        res.status(200);
    } catch(err) {
        res.send(err)
    }
});
app.delete('/jobs/:id', function(req, res) {
    const result = Jobs.removeItem(req.params.id);
    res.status( result.status );
    res.send(result.message);
})

//Users route
app.get('/users', function (req, res) {
    res.send(JSON.stringify(Users.find()))
});


let PORT = process.env.PORT || 4100;

console.log(chalk.yellow('°--Starting Server--°'));
app.listen(PORT, function () { console.log(chalk.green(`--Listening on port: ${PORT}--`)) });

