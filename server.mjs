import http from 'node:http';

const users = [{
    name: 'Moises',
    age: 15,
    status: true
}, {
    name: 'Gaymar',
    age: 300,
    status: false
}, {
    name: 'PapaiVina',
    age: 2,
    status: true
}];

http.createServer((request, response) => {
    if (request.url === '/users') {
        response.writeHead(200, {'content-type': 'application/json'});
        response.end(JSON.stringify(users));
    } else {
        response.writeHead(200, {'content-type': 'application/json'});
        response.end(JSON.stringify({mesage: 'Pagina não encontrada'}));
    }
    
}).listen(3000);
