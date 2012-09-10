var AllLists = new Meteor.Collection("datatable");

Meteor.publish("datatable", function(datatable_id) {
  specificList = AllLists.find({table_id: datatable_id});
  if (specificList.count() < 1) {
   AllLists.insert({table_id: datatable_id, table: [["Welcome to listable"],["Your list will be remembered"],["Just use the same url"]]});
    specificList =AllLists.find({table_id: datatable_id});
  }
  return specificList;
});

Meteor.startup(function() {
  var data = [["a","b","c"],
              ["1","2","3"]];
  if(AllLists.find().count() === 0) {
   AllLists.insert({table_id: "welcome", table: data});
  }
});
