var output = $("#output");
var output1 = $("#output1");


function handleNumber(number) {
  var totalOutput = output.text() 
  output.text(totalOutput + number)
}

function handleResult() {
  var result = eval(output.text());
  
  output.text(result);
}

function handleClear(){
  output.text("");
  output1.text("Click on check");
}

function handleBackspace() {
  var mainNumber = output.text();
  
  output.text(mainNumber.slice(0,-1));
  output1.text("Click on check");
}

