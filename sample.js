$(document).ready(function() {
  $("td").hover(editableIn, editableOut).click(editableClick);
  $("#currentlyEditableField").change(submitEditableField);
});

function submitEditableField() {
  alert("Value: " + $(this).value);
  $(this).replaceWith($(this).value);
}

function editableIn() {
  $(this).addClass("editable");
}

function editableOut() {
  $(this).removeClass("editable");
}

function editableClick() {
  var cellValue = $(this).html();
  $(this).replaceWith(editableField(cellValue));
  $("#currentlyEditableField").change(submitEditableField);
}

function editableField(cellValue) {
  return '<td> <input type="text" id="currentlyEditableField" value="' + cellValue + '" /> </td>'
}
