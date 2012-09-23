"use strict";
/*global Backbone: false, Session: true */
var Routing = {
  start: function() {
    var ListsRouter = Backbone.Router.extend({
      routes: {
        ":list_url": "main"
      },
      main: function (list_url) {
        Session.set("list_id", list_url);
      },
      setList: function (list_id) {
        this.navigate(list_id, true);
      }
    });
    var Router = new ListsRouter();
    Router.navigate(Session.get("list_id"),{});
  },
  startHistory: function() {
    Backbone.history.start({pushState: true});
  }
};
