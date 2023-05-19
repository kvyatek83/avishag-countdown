const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3030;

app.use(express.static(__dirname + '/dist/avishag-countdown'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`App is running on http://localhost:${port}`));