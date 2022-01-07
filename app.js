const express = require('express');
const path = require('path');

const app = express();

app.listen(3002, () =>{
    console.log('hola');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
    
});

app.use(express.static(path.join(__dirname, '/public')));

