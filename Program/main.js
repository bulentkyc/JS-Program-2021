/* var userInput = prompt(`Please give me a number, If you don't want to do, type a number greater than 10`, `Type the number only as digits`);
var sum = 0;


while ( userInput*1 <= 10 ) {
    sum = sum + userInput*1;
    userInput = prompt(`Please give me a number, If you don't want to do, type a number greater than 10`, `Type the number only as digits`);
}

alert(`Final sum is ${sum}`); */


function calculate() {
    var fNumber = parseInt(document.getElementById('first-number').value);
    var lNumber = parseInt(document.getElementById('last-number').value);
    console.log(fNumber, lNumber);

    var counter = fNumber;
    var sum = 0;
    var steps = `${fNumber}`;
    console.log(typeof steps);

    while (counter <= lNumber) {
        sum = sum + counter;
        counter = counter + 1;
        //console.log(steps + '=' + sum);
        console.log(`${steps} = ${sum}`);
        steps = `${steps} + ${counter}`
    }
}