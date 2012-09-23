"use strict";
/*global Meteor: false, Template:false, Session: false */

var Table = null;

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

var updateDatasource = function(data, source) {
  if (source === "loadData") {
    return;
  }
  var row = data[0][0];
  var col = data[0][1];
  var change = data[0][3];
  var entries = Table.findOne().table;
  insertData(row, col, change, entries);
  Table.update({table_id: Session.get("list_id")}, {$set: {table: entries}});
  $("#main-table").handsontable("loadData", entries);
};

var renderPage = function() {

  var datatable_id = Session.get("list_id");
  Meteor.subscribe("datatable", datatable_id, function() {
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
};

Template.mainTemplate.tableName = function() {
  return Session.get("list_id");
};


