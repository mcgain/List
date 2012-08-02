require("nodeunit")

exports.testNothing = function(test) {
  test.equals(3,3, "number test");
  test.done();
}
