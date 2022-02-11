const path = require('path');

const contrlador =
{
    home: (req,res) =>{
        res.sendFile(path.resolve(__dirname, '..','./views/home.html'));
    }
}

module.exports = contrlador;