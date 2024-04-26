/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/
//1. 
function sumNumbers(a, b, c) {
 
    var sum = a + b + c;
 
    console.log(sum);
}
 
// checking:
sumNumbers(1, 2, 3);

//2.
function subtractNum(a, b) {
    var diff = a - b;
    console.log(diff);
}

//checking:
subtractNum(1, 2);

//3.
function multiplyNum(a, b) {
    var product = a*b;
    console.log(product);
}

//checking:
    multiplyNum(1,2);

//4.
function average(a, b){
    var operation = (a+b)/2;

    console.log(operation);
}
average(2,2);
