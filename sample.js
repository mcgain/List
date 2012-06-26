$(document).ready(function() {
  addEventsToCells();
});

function addEventsToCells() {
  $("td").hover(editableIn, editableOut).click(editableClick);
}

function submitEditableField() {
  $(this).replaceWith($(this).val());
  addEventsToCells();
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
