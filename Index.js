const http = require('http');
const mdata = require('./Data.js');

const hostName = '127.0.0.1';
const portNo = 3060;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application\json');
    res.write(JSON.stringify(mdata));
    res.end();
});

server.listen(portNo, hostName, () => {
    console.log(`Server running at http://${hostName}:${portNo}/`);
});

