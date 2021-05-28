var output = $("#output");
var output1 = $("#output1");


function handleBinary() {
    var input = output.text();
    var x = input.length - 1;
    
    if (input == "0"){

        output1.text(input+" in Binary");
        output.text("0");

    } else if (input[0] == "/" || input[0] == "*" || input[x] == "/" || input[x] == "*" || input[x] == "-" || input[x] == "+"){
        alert(input + " this is not a number");
    }else if ( input != ""){

        var n = eval(input);
        var number1 = Math.floor(n);
        var number2 = n-number1;
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
            alert("Nagetive number has no binary value")
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

    } else {
        alert("Please input a number");
    }

}