var output = $("#output");
var output1 = $("#output1");


function handleFactorial() {
    var input = output.text();
    var x = input.length - 1;
    
    if (input == "0"){

        output1.text("Factorial of " + input +" is");
        output.text("0");

    } else if (input[0] == "/" || input[0] == "*" || input[x] == "/" || input[x] == "*" || input[x] == "-" || input[x] == "+"){
        alert(input+" this is not a intiger number");
    }else if ( input != ""){
        var n = eval(input);
        
        if(n > 170){
            output1.text("Infinite");
        } else if (n<0){
            alert("input a non-negetive intiger number");
        }else{

            var result = 1;

            for (i=n; i>1; i--){

            result = result*i;

            }
            output.text(result);
            output1.text("Factorial of "+n+" is");
        }
        

    } else {
        alert("Please input a number");
    }

}