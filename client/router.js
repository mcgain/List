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

    Backbone.history.start({pushState: true});
  }
};
