var AllLists = new Meteor.Collection("datatable");

Meteor.publish("datatable", function(datatable_id) {
  console.log("request is: " + datatable_id);
  specificList = AllLists.find({table_id: datatable_id});
  console.log("specificList is: " + specificList);
  if (specificList.count() < 1) {
    console.log("table not found. I have to create a new one");
   AllLists.insert({table_id: datatable_id, table: [["Welcome to listable"],["Your list will be remembered"],["Just use the same url"]]});
    specificList =AllLists.find({table_id: datatable_id});
    console.log("table is now " + specificList);
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
