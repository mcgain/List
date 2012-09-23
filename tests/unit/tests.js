"use strict";
/*global module: false, test: false, sinon: false, Backbone: true, Routing: false, expect: false*/

module("Routing");
var Backbone = {};

test("history", function() {
  Backbone = {
    history: {
      start: function() {}
    }
  };
  var mock = sinon.mock(Backbone.history);
  mock.expects("start").once();
  Routing.startHistory();
  mock.verify();
  expect(0);
});
