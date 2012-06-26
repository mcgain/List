$(document).ready(function() {
  $("td").click(function() {

    alert("woooo");
  });

  $("td").hover(editableIn, editableOut);
    
    
});


function editableIn() {
  $(this).addClass("editable");
}

function editableOut() {
  $(this).removeClass("editable");
}
