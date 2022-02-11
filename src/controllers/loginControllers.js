const path = require('path');

const contrlador =
{
    login: (req,res) =>{
        res.sendFile(path.resolve(__dirname, '..','./views/login.html'));
    }
}

module.exports = contrlador;