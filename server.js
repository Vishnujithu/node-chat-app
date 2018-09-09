const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname,'..','public');

var app = express();

// app.get('/', (req, res) => {
// res.status(200).send(
//     { name : 'Hello world',
//     age : 23
//     });
// });


app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('server is up on port 3000')
});

//module.exports.app = app;