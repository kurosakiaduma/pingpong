// business logic
var pingPong = function(inputNumber) {
  var result = [];
  for (var i = 0; i <= inputNumber; i++ ) {
    if (i % 3 === 0 && i % 15 !== 0) {
      result.push("PING");
    }
  return result;
};
