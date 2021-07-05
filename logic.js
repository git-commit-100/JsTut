console.log('This is Js Tutorial for Math Library');

//Js Math Library
// 1. round() -- rounds off a number
let operation = Math.round(7.6);
operation = Math.round(7.2);

// 2. ceil() -- rounds off to next bigger digit
operation = Math.ceil(2.3);
operation = Math.ceil(2.9);

// 3.floor() -- rounds off to previous digit
operation = Math.floor(8.9);
operation = Math.floor(2.3);

// 4. trunc() -- returns integer part
operation = Math.trunc(6.94939);

// 5. sign() -- returns 1 if +ve and -1 if -ve , 0 for 0
operation = Math.sign(-44564);
operation = Math.sign(984034);
operation = Math.sign(0);

// 6. pow( , ) -- takes 2 args , first the number and second its power(index)
operation = Math.pow(2,3);
operation = Math.pow(2,2*5);

// 7. sqrt() -- gives root of the number
operation = Math.sqrt(256);
operation = Math.sqrt(25698659850);

// 8. abs() -- gives +ve value 
operation = Math.abs(-894594);

// 9. min(*) -- gives minimum from args specified
operation = Math.min(-6,7,-2,75,-5,-8,5,2);

// 9. max(*) -- gives maximum from args specified
operation = Math.max(-6,7,-2,75,-5,-8,5,2);

// 10. random() -- gives random number from 0 to 1, always lower than 1 , range = [0.01,0.99]
operation = Math.random();

// will return number from 1 to 10
operation = Math.floor(Math.random()*10+1);

console.log(operation);


// function to find out random numbers between given user input
function getRandomNumber(min,max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
}

getRandomNumber(1,5);



