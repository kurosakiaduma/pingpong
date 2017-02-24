// back-end logic
var pingPong = function(inputNumber) {
  var result = [];
  for (var i = 0; i <= inputNumber; i++ ) {
    if (i % 3 === 0 && i % 15 !== 0) {
      result.push("PING");
    } else if (i % 5 === 0 && i % 15 !== 0) {
      result.push("PONG");
    } else if (i % 15 === 0) {
      result.push("PING-PONG");
    } else {
      result.push(i);
    }
  }
  return result;
};
// user interface
$(function() {
  $(".pp" ).submit(function(event) {
    event.preventDefault();
    $(".output").show();
    $("ul#showOutput").empty();
    var inputNumber = parseInt($("#number").val());
    var output = pingPong(inputNumber);
    for (var i = 1; i <= inputNumber; i++) {
     $("#showOutput").append("<li>" + output[i] + "</li>");
   }
  });
 });
