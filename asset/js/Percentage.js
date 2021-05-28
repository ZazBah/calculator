var output = $("#output");
var output1 = $("#output1");

function handlePercentage () {

    var input = output.text();
    var x = input.length - 1;

    if (input == "") {
        alert("Please input a number");
    } else if (input[0] == "/" || input[0] == "*" || input[x] == "/" || input[x] == "*" || input[x] == "-" || input[x] == "+") {
        alert(input + " this is not a number ");
    } else {
        var n = eval(input);

        var result = n / 100 ;

        output.text(result);
        output1.text("Percentage of " + n + " is");
    }
}