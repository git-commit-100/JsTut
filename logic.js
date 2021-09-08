console.log('Generators');

function* numberGenerate() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let number = numberGenerate();

//PRINT GENERATOR VALUES
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());

//GIVE ANY VALUE WHILE CALLING
console.log(number.return(109));
console.log(number.return('something returned'));

//THROW AN ERROR
console.log(number.throw('Generator Crashed'));



