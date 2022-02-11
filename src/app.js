const homeRoutes = require('./routes/homeRoutes');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');

const express = require('express');
const path = require('path');

const app = express();

app.use('/', homeRoutes);
app.use('/', loginRoutes);
app.use('/', registerRoutes);

app.use(express.static(path.resolve(__dirname,'..','./public')));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando en puerto 3000');
});
