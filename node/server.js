var http = require("http");
var url = require("url");

function start(route, static_handler, list_handler) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    
    route(pathname, static_handler, list_handler);

    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
