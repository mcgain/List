(function() {
  var ListsRouter = Backbone.Router.extend({
    routes: {
      ":list_name": "main"
    },
    main: function (list_id) {
      Session.set("list_id", list_id);
    },
    setList: function (list_id) {
      this.navigate(list_id, true);
    }
  });

  var Router = new ListsRouter();

  Backbone.history.start({pushState: true});

  var Table = null;

  var datatable_id = Session.get("list_id");
  var data = Meteor.subscribe("datatable", datatable_id, function() {
    Table = new Meteor.Collection("datatable");
    var entries = Table.findOne().table;
    $("#main-table").handsontable({
      rows: 3, 
      cols: 1,
      minSpareCols: 1,
      minSpareRows: 1,
      onChange: updateDatasource
    });
    $("#main-table").handsontable("loadData", entries);
  });

  Template.mainTemplate.tableName = function() {
    return Session.get("list_id");
  };

  var updateDatasource = function(data, source) {
    if (source === "loadData") {
      return;
    }
    var row = data[0][0];
    var col = data[0][1];
    var change = data[0][3];
    var entries = Table.findOne().table;
    insertData(row, col, change, entries);
    Table.update({table_id: "something"}, {$set: {table: entries}});
    $("#main-table").handsontable("loadData", entries);
  };

  var insertData = function(row, col, value, entries) {
    console.log("insert data called");
    if(entries[row] === undefined) {
      var newRow = []; 
      newRow[col] = value; 
      entries[row] = newRow;
    } 
    else{
      entries[row][col] = value;
    }
  };

}());
