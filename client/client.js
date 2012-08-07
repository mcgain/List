var Table = null;
var data = Meteor.subscribe("datatable", "something", function(){
  Table = new Meteor.Collection("datatable");
  var entries = Table.findOne().table;
  $("#main-table").handsontable({
    rows: 2, 
    cols: 3,
    minSpareCols: 1,
    minSpareRows: 1,
    onChange: updateDatasource
  });
  $("#main-table").handsontable("loadData", entries);
});

Template.mainTemplate.tableName = function() {
  return "WHAYTTT@";
}

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
  if(entries[row] === undefined) {
    newRow = []; 
    newRow[col] = value; 
    entries[row] = newRow;
  } 
  else{
    entries[row][col] = value;
  }
}

