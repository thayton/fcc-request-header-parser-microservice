const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api/whoami', (req, res) => {
    let ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress        || 
        req.socket.remoteAddress            ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    
    res.send({
        'ipaddress': ip,
        'language': req.headers['accept-language'],
        'software': req.headers['user-agent']
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };
