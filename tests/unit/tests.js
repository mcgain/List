module("Routing");
test("history", function() {
  Backbone = {
    history: {
      start: function() {},
    }
  };
  var mock = sinon.mock(Backbone.history);
  mock.expects("start").once();
  Routing.startHistory();
  mock.verify();
  expect(0);
});

