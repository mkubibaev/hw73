const express = require('express');
const Caesar = require('caesar-salad').Caesar;

const app = express();
const port = 8000;
const password = 'lorem';

app.get('/encode/:message', (req, res) => {
    const message = req.params.message;
    const encodedMessage = Caesar.Cipher(password).crypt(message);     
    res.send(encodedMessage);
});

app.get('/decode/:message', (req, res) => {
    const message = req.params.message;
    const decodedMessage = Caesar.Decipher(password).crypt(message);     
    res.send(decodedMessage);
});

app.listen(port, () => {
    console.log('Server running at localhost with port: ' + port);
});