const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/api/whoami', (req, res) => {
    res.send({
        'ipaddress': req.ip,
        'language': req.headers['accept-language'],
        'software': req.headers['user-agent']
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };
