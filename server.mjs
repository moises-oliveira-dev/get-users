import http from 'node:http';

http.createServer((request, response) => {
    response.end('Hellor Client');
}).listen(3000);
