var data = Meteor.subscribe("datatable", "something");
var Table = new Meteor.Collection("datatable");
var entries = Table.find("something");
$("#main-table").handsontable({rows: 2, cols: 3});
$("#main-table").handsontable("loadData", entries);

