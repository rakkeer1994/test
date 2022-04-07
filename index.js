




const http=require("http");
http.createServer(function(req, res){
    res.write("hello world of the node js which is runtime environment");
    res.end();
}).listen(3000, ()=>{console.log("server is running")})