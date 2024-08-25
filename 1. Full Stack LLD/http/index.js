const http = require("http");

const port = 5000;
const host = "localhost";

const server=http.createServer((req,res)=>{
    console.log(req);
    res.setHeader('Content-Type',"text/html");

    res.write("<html><head><title>Node JS HTTP Server</title></head><body>");
    res.write("<h1>Hello, Anand!!</h1>");
    res.write("</body></html>");
    
    res.end();
});

server.listen(port, host, () => {
    console.log('Server is listening on https://${host}:${port}');
});