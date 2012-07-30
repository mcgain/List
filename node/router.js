function get_handler(pathname, static_handler, list_handler) {
  console.log("About to route a request for " + pathname);
  var nodes = pathname.toUpperCase().split('/');
  console.log(nodes);
  if (nodes[1] === "LIST") {
    //pass remainder to list handler
    console.log("passing " + nodes[2] + " to list handler");
    list_handler.handle(nodes[2]);
  }
  else {
    //serve a static file 
    console.log("serve " + nodes[1] + ".html");
    static_handler.handle(nodes[1]);
  }
}

exports.route = route;
