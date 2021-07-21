//PARENT CLASS
class Animal {
  constructor(cName) {
    this.name = cName;
  }

  //METHODS
  speak() {
    console.log(`${this.name} speaks !`);
  }

  move() {
    console.log(`${this.name} moves !`);
  }
}

//CHILD CLASS
class Dog extends Animal {
  constructor(name) {
    //CALLED SUPER CONST TO RUN CODE OF PARENT CONST
    super(name);
  }

  //OVERRIDING METHODS
  speak() {
    console.log(`${this.name} barks !`);
  }

  move() {
    console.log(`${this.name} runs !`);
  }
}

//CHILD CLASS
class Elephant extends Animal {
  constructor(name) {
    super(name);
  }

  //OVERRIDING METHODS
  speak() {
    console.log(`${this.name} trunks !`);
  }

  move() {
    console.log(`${this.name} walks !`);
  }
}

//CREATING OBJECTS
let animal = new Animal("horse");
let dog = new Dog("bruno");
let elephant = new Elephant("haathi");
