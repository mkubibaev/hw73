const express = require('express');

const app = express();
const port = 8000;

app.get('/:any', (req, res) => {     
    res.send(req.params.any);
});

app.listen(port, () => {
    console.log('Server running at localhost with port: ' + port);
});