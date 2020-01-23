const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function (req, res) {
    console.log(req.body.name + ":" + req.body.message);
    res.send()
});

app.listen(8000, function () {
    console.log('Listening on port 8000');
});

