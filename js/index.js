$(function () {
  $('#slider-range').slider({
    range: true,
    min: 980,
    max: 50000,
    values: [980, 20465],
    slide: function (event, ui) {
      $('#amount').val(ui.values[0]);
      $('#amounts').val(ui.values[1]);
    },
  });
  $('#amount').val(
    $('#slider-range').slider('values', 0),
    $('#slider-range').slider('values', 1)
  );
});
$(function () {
  $('#slider-ranges').slider({
    range: true,
    min: 980,
    max: 50000,
    values: [980, 20465],
    slide: function (event, ui) {
      $('#amountd').val(ui.values[0]);
      $('#amountsd').val(ui.values[1]);
    },
  });
  $('#amount').val(
    $('#slider-ranges').slider('values', 0),
    $('#slider-ranges').slider('values', 1)
  );
});
function openNav() {
  document.getElementById('mySidebar').style.width = '300px';
}
function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
}
