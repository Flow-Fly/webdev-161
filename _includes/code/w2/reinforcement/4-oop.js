const animal1 = {
  name: `cat`,
  numOfLegs: 4,
  sound: `meow`,
  talk() {
    console.log(`${this.sound}. i'm a ${this.name}`);
  }
}

const animal2 = {
  name: `dog`,
  numOfLegs: 4,
  sound: `woof`,
  talk() {
    console.log(`${this.sound}. i'm a ${this.name}`);
  }
}

const animal3 = {
  name: `fish`,
  numOfLegs: `?`,
  sound: `!?`,
  talk() {
    console.log(`${this.sound}. i'm a ${this.name}`);
  }
}


// ======================================================
// using a function to create objects
// ======================================================

function animalFactory(name, numOfLegs, sound) {
  return {
    name: name,
    numOfLegs: numOfLegs,
    sound: sound,
    talk() {
      console.log(`${this.sound}. i'm a ${this.name}`);
    }
  }
}

const myDog = animalFactory(`doggy`, 4, `woof`);

console.log(myDog);


// ======================================================
// using a class to create objects (class instances)
// ======================================================

class Dog {
  constructor(name, numOfLegs, sound) {
    this.name = name;
    this.numOfLegs = numOfLegs;
    this.sound = sound;
  }
  talk() {
    console.log(`${this.sound}. i'm a ${this.name}`);
  }
}

const sparky = new Dog(`sparky`, 4, `woof`);

console.log(sparky);