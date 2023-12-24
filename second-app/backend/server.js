const http = require('http');
const app = require('./app')
const normalizedport = val =>{
    var port = parseInt(val,10)
    if (isNaN(port)){
        return val;
    }
    if (port >=0){
        return port;
    }
    return false;
}
const onError  = error=>{
    if (error.syscall !== 'listen'){
        throw error
    }
    const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
    switch(error.code){
        case EACCES:
            console.log(bind + 'require elavated priviledges')
            process.exit(1)
        case EADDRINUSE:
            console.log(bind + 'already in use')
            process.exit(1)
        default:
            throw error
    }
    
}
const onListening = listening=>{
    const addr = server.address();
    const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
    console.log('listening on ' + bind)
}
const port = normalizedport(process.env.PORT || '3000');
app.set('port',port)
const server = http.createServer(app)
server.on('error',onError)
server.on('listening',onListening)
server.listen(port);