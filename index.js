const fs = require("fs");
const http = require("http");
const host = "localhost";
const port = 8007;

let content;
const requestListener = (req,res)=>{
    console.log("request is made!");
    fs.readFile(__dirname+"/home.html","UTF-8",(err,data)=>{
        if(err){
            res.writeHead(500);
            res.end("unable to fetch the data");
        }
        content = data;
        res.setHeader("Content-Type","text/html");
        res.writeHead(200);
        res.end(content);
    })
}
const server = http.createServer(requestListener);

server.listen(port,host,()=>{
    console.log("server is running");
})

//==============================================================================
//this here works very fine
// let indexFile;

// const requestListener = function (req, res) {
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.end(indexFile);
// };

// const server = http.createServer(requestListener);

// fs.readFile(__dirname + "/home.html","UTF-8",(err,contents)=>{
//     if(err) throw err;
//     indexFile = contents;
//     server.listen(port, host, () => {
//         console.log(`Server is running on http://${host}:${port}`);
//     });
// })
        
    