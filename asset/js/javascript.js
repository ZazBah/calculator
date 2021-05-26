var output = $("#output");
var output1 = $("#output1");

function handleNumber(number) {
  var totalOutput = output.text()

  output.text(totalOutput + number)
}
function handleClear(){
  output.text("");
  output1.text("click on check");
}
function handleResult() {
  var result = eval(output.text());
  output.text(result)
}

function handlePersent() {
  var input = eval(output.text());
  
  if (input != ""){
    var result = input / 100 ;
    output.text(result);
    output1.text("Percentage of "+input);
  } else {
    alert("please input a number")
  }
}

function handleBackspace() {
  var mainNumber = output.text();
  
  if (mainNumber != "") {
    output.text(mainNumber.slice(0,-1));
  }else{
    alert("its already empty")
  }
}

function handleMore() {
  $(".div2").animate({height:"530px"},1000);
}

function handleBinary() {
  var input = eval(output.text());

  var number1 = Math.floor(input);
  var number2 = input-number1;
  var list1 = [];
  var list2 = [];

  for (i=1; i<=100; i++){
      if(number1<=0){
          break
      }
      ni = number1 % 2;
      number1 = (number1 - ni) / 2;
      list1.unshift(ni);
  }
  var result1 = list1.join("");

  for (i=1; i<5; i++){
      if(number2<=0){
          break
      }
      nf = number2 * 2;
      a = Math.floor(nf);
      number2 = nf - a;
      list2.push(a);
  }
  var result2 = list2.join("");

  var length1 = list1.length;
  var length2 = list2.length;

  if(length1 == 0 && length2 == 0){
      alert("plese input a number")
  }
  else if(length1 > 0 && length2 == 0){
      var binary = result1;
      output.text(binary);
      output1.text(input+" in Binary");
  }
  else if(length1 == 0 && length2 > 0){
      var binary = "0."+result2;
      output.text(binary);
      output1.text(input+" in Binary");
  }
  else{
      var binary = result1+"."+result2 ;
      output.text(binary);
      output1.text(input+" in Binary");
  }

}

function handleOctal() {

  var input = eval(output.text());

  var number1 = Math.floor(input);
  var number2 = input-number1;
  var list1 = [];
  var list2 = [];

  for (i=1; i<10; i++){
      if(number1<=0){
          break
      }
      ni = number1 % 8;
      number1 = (number1 - ni) / 8;
      list1.unshift(ni);
  }

  var result1 = list1.join("");

  for (i=1; i<5 ; i++){
      if(number2<=0){
          break
      }
      nf = number2 * 8;
      a = Math.floor(nf);
      number2 = nf - a;
      list2.push(a);
  }

  var result2 = list2.join("");

  var length1 = list1.length;
  var length2 = list2.length;

  if(length1 == 0 && length2 == 0){
      alert("please input a number")
  }
  else if(length1 > 0 && length2 == 0){
      var octal = result1;
      output.text(octal);
      output1.text(input+" in Octal");
  }
  else if(length1 == 0 && length2 > 0){
      var octal = "0."+result2;
      output.text(octal);
      output1.text(input+" in Octal");
  }
  else{
      var octal = result1+"."+result2;
      output.text(octal);
      output1.text(input+" in Octal");
  }

}

function handleFactorial() {
  var input = eval(output.text());
  
  if (input == ""){
    alert("Please input a number");
  }else if(input > 170){
    output1.text("Infinite");
  }else if(input == 0){
    output.text("0");
    output1.text("Factorial of "+input);
  }else{
    var result = 1;

    for (i=input; i>1; i--){

    result = result*i;

    }
    output.text(result);
    output1.text("Factorial of "+input);
  }
}

function handleCheck() {
  var input = eval(output.text());

  if(input != ""){
    var mathFloor = Math.floor(input);
    var check1 = input % mathFloor ;
  
    if (check1 == 0) {
      var check2 = input % 2;
      if(check2 == 0){
          process1 = "Even" ;
      }else{
          process1 = "Odd" ;
      }
  
      var isPrime = true;
      if (input === 1) {
          process2 = "Composite Number"
      } else if (input > 1) {
          for (var i = 2; i < input; i++) {
              if (input % i == 0) {
                  isPrime = false;
                  break;
              }
          }
  
          if (isPrime) {
              process2 = "Prime number" ;
          } else {
              process2 = "Not Prime number" ;
          }
          
      }else {
        process2 = "Negetive Number" ;
      }
  
      result = process1+" and "+process2 ;
    }else if (input == 0){
      result = "Nutral Number" ;
    }else{
      result = "Decimal Number" ;
    }
    
    output.text(input);
    output1.text(result);
  } else {
    alert("please input a number");
  }
}
function handleLess() {
  $(".div2").animate({height:"80px"},1000);
}



 

