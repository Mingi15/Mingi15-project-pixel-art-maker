// Select size input
const $tableElement = $("#pixelCanvas");
const $inputHeight = $("#inputHeight");
const $inputWidth = $("#inputWidth");
// Select color input
const $colorPicker = $("#colorPicker");

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit((event) => {
  event.preventDefault();

  let height = $("#inputHeight").val();
  let width = $("#inputWidth").val();

  // clears table
  $("tr").remove();

  makeGrid(height, width);
  addCellClickListener();
});

//create table: (for loop runs from inside, then outside).create td, append to tr; create tr, tr to table(canvas).
function makeGrid(x, y) {
  for (let i = 1; i <= x; i++) {
    $tableElement.append("<tr></tr>");
  }

  for (let j = 1; j <= y; j++) {
    $("tr").append("<td></td>");
  }
}

//choosing color
function addCellClickListener() {
  $("td").click((event) => {
    let color = $colorPicker.val();
    $(event.currentTarget).css("background-color", color);
  });
}
