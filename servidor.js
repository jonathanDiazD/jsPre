const http = require("http");

function sitioWeb(req,res){

	res.writeHead(200,{"Content-type":"text/plain"});
	res.end("Mi primer servidor");

}

let servidor = http.createServer(sitioWeb);

servidor.listen(3000,"127.0.0.1");

console.log("Servidor correndo localmente.")


Meeting ID: 882 4874 1457
Passcode: 998365