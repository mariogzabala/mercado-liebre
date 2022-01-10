const express = require('express');
const path = require('path');

const app = express();

app.listen(3002, () =>{
    console.log('hola');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))    
});
app.get('/ayuda', (req, res) => {
    res.sendFile(path.join(__dirname, './views/ayuda.html'))    
});
app.get('/crea-tu-cuenta', (req, res) => {
    res.sendFile(path.join(__dirname, './views/crea-tu-cuenta.html'))    
});
app.get('/ingreso', (req, res) => {
    res.sendFile(path.join(__dirname, './views/ingreso.html'))    
});
app.get('/mis-compras', (req, res) => {
    res.sendFile(path.join(__dirname, './views/mis-compras.html'))    
});
app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, './views/ofertas.html'))    
});
app.get('/tiendas-oficiales', (req, res) => {
    res.sendFile(path.join(__dirname, './views/tiendas-oficiales.html'))    
});
app.get('/vender', (req, res) => {
    res.sendFile(path.join(__dirname, './views/vender.html'))    
});


app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));

