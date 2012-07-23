var server = require("./server");
var router = require("./router");
var static_handler = require("./static_handler");
var list_handler = require("./list_handler");
server.start(router.route, static_handler, list_handler);
