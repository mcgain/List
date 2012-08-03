var Table = null;
var data = Meteor.subscribe("datatable", "something", function(){
  Table = new Meteor.Collection("datatable");
  var entries = Table.findOne().table;
  $("#main-table").handsontable({
    rows: 2, 
    cols: 3,
    onChange: updateDatasource
  });
  $("#main-table").handsontable("loadData", entries);
});

var updateDatasource = function(data, source) {
  if (source === "loadData") {
    return;
  }
  var row = data[0][0];
  var col = data[0][1];
  var change = data[0][3];
  var entries = Table.findOne().table;
  console.log("Entries: " + entries + " Change: " + change + " col:" + col + " row: " + row);
  entries[row][col] = change;
  console.log("XXXX Entries: " + entries + " Change: " + change);
  Table.update({table_id: "something"}, {$set: {table: entries}});
  $("#main-table").handsontable("loadData", entries);
  console.log("inserting " + change);
};

