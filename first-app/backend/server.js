const http = require('http');
const app =require('./app');
const posts = require('./app')
const { debug } = require('console');
//const port = process.env.PORT || 3000;
const normalizePort = val =>{
    var port = parseInt(val,10);
    if (isNaN(port)) {
        return val;
    }
    if (port >=0){return port;}
    return false;
}
const onError = error=>{
    if (error.syscall !== 'listen'){throw error};

const bind = typeof port === 'string'? 'pipe ' + port : 'port ' + port;
switch(error.code){
    case 'EACCES':
        console.error(bind + ' requires elavated privilleges');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
    default: throw error;
}};
const onListening = () => {
    const addr = server.address();
    const bind = typeof port === 'string'  ?  'pipe '  +  port : "port "  +  port;
    debug('server listening on ' +  bind);
};
const port = normalizePort(process.env.PORT  ||  '3000');
app.set('port', port);

const server = http.createServer(app);
server.on('error', onError);
server.on('listening',onListening);
server.listen(port);
console.log('hello')
//console.log(posts);