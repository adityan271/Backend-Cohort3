let http = require("http");


let server = http.createServer((req, res) => {
    console.log("Hello im server")
    res.end("Hello re baba")
})


server.listen(3000, () => {
    console.log("server is running")
})