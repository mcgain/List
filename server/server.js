Table = new Meteor.Collection("datatable");

Meteor.publish("datatable", function(datatable_id) {
  return Table.find({table_id: datatable_id});
});

Meteor.startup(function() {
  var data = [["a","b","c"],
              ["1","2","3"]];
  if(Table.find().count() === 0) {
    Table.insert({table_id: "something", table: data});
  }
});
