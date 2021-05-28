var output = $("#output");
var output1 = $("#output1");

function handleCheck() {
    var input = output.text();
    var x = input.length - 1;

    if (input == ""){

        alert("Please input a number");

    } else if (input[0] == "/" || input[0] == "*" || input[x] == "/" || input[x] == "*" || input[x] == "-" || input[x] == "+"){
        alert(input +" this is not a number");
    }else{

        var number = eval(input);
        var mathFloor = Math.floor(number);
        var check1 = number - mathFloor;
        
        if (number == 0) {
            output1.text("Nutral number");
        } else if (check1 != 0) {
            if ( number < 0) {
                output1.text("Negetive Decimal number");
            } else {
                output1.text("Decimal number");
            }
        } else if (number < 0) {
            output1.text("Negetive number");
        } else {
            var check2 = number % 2;
            
            if (check2 == 0) {
                process1 = "Even" ;
            } else {
                process1 = "Odd" ;
            }
    
            var isPrime = true;
            if (number == 1){
                process2 = "Composite number" ;
            } else if (number == 2){
                process2 = "Composite number" ;
            } else {
                for (var i = 2; i < number; i++) {
                    if (number % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
        
                if (isPrime) {
                    process2 = "Prime number" ;
                } else {
                    process2 = "Composite number" ;
                }       
            }
            var result = process1 + " and " + process2 ;
            output1.text(result);
        }

    }

}