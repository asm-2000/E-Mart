const http = require('http');
const App = require('./app');
const port = process.env.PORT || 8080;

server = http.createServer(App);
server.listen(port,()=>{
    console.log('server is listening at port: ', port);
});