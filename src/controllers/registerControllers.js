const path = require('path');

const contrlador =
{
    register: (req,res) =>{
        res.sendFile(path.resolve(__dirname, '..','./views/register.html'));
    }
}

module.exports = contrlador;