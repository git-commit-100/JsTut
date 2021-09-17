console.log('Destructuring');

//1. DESTRUCTURING OF ARRAY    

let fruits = ['apple', 'banana', 'mango', 'kiwi', 'pineapple', 'orange'];
let cars = ['maruti', 'bmw', 'mercedes', 'kia', 'cheverolet', 'hyundai'];

// ACCESSING ELEMENTS FROM ARRAY IN THE OLD WAY
// let element1 = fruits[0];
// console.log(element1);

// let element2 = fruits[1];
// console.log(element2);

//USING DESTRUCTURING   
let [e1, e2, e3] = fruits;
console.log(e1, e2, e3);

//STORES REMAINIG ELEMENTS IN rest AS AN ARRAY
let [i1, i2, i3, ...rest] = fruits;
console.log(i1, i2, i3, rest);

//FOR SKIPPING ELEMEnTS
let [a1, , a3, a4, ...remaining] = cars;
console.log(a1, a3, a4, remaining);

//COMBINIG ARRAYS
//OLD WAY
let newArray = fruits.concat(cars);
console.log(newArray);

//USING DESTRUCTURING
newArray = [...fruits, ...cars];
console.log(newArray);

//USING FOR RETURNING MULTIPLE VALUES FROM A FUNCTION
function sumAndMultiply(num1, num2) {
    return [num1 + num2, num1 * num2, num1 / num2];
}

let output = sumAndMultiply(4, 7);
console.log(output);

//TO OBTAIN SEPERATE VALUES FROM ABOVE
let [output1, output2] = sumAndMultiply(4, 7);
console.log(output1, output2);

//WE CAN ALSO SET A DEFAULT VARIABLE , WHEN VALUE IS PASSED IT OUTPUTS THAT VALUE
let [out1, out2, out3 = 'No Division Yet'] = sumAndMultiply(4, 7);
console.log(out1, out2, out3);

//2. DESTRUCTURING IN OBJECTS
let personOne = {
    name: 'Robin',
    age: 24,
    city: {
        street: '12th Street',
        pin: 48281,
    }
}

let personTwo = {
    name: 'John',
    age: 19,
    city: {
        street: '32nd Street',
        pin: 67871,
    }
}

//HERE VARIABLES (KEYS) MUST MATCH OBJECT'S PROPERTY 
// let { name, age } = personOne;
// console.log(name,age);

//IF WANT TO NAME OTHER KEY
let { name: firstName, age } = personTwo;
console.log(firstName, age);

//COMBINING TWO OBJECTS
let personThree = { ...personOne, ...personTwo };
//personOne's values will be rewritten by personTwo
console.log(personThree);

//DEFAULT VALUES AND DESTRUCTURING MORE
let { city: { street, area = "Canada" } } = personThree;
console.log(street, area);

//UISNG IN FUNCTIONS
//NORMAL CALL
// function getInfo(person) {
//     console.log(person.name,person.age);
// }

//PARAMETERS MUST MATCH OBJECT PROPERTY
function getInfo({ name, age, city: { pin } }) {
    console.log(`My name is ${name}. My age is ${age}. My pin is ${pin}`);
}

getInfo(personThree);











