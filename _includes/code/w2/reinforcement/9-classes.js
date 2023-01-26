function catCreator3000(name, age, talent) {
  return {
    name: name,
    age: age,
    talent: talent,
    gangName: `${name}izzle`,
    timeBeforeDeath: 20 - age,

    speak() {
      console.log("meow");
    },
    sayName() {
      console.log(this.name);
    }
  };
}

const loop = catCreator3000("loop", 1, "none");
console.log(loop);

loop.name = "jon";
loop.sayName();

class Cat {
  constructor(name, age, talent) {
    this.name = name;
    this.age = age;
    this.talent = talent;
  }
  sayName() {
    console.log(this.name);
  }
}

class Something extends Cat {
  constructor(name, age, talent) {
    super(name, age, talent);
    this.extra = "I don't know";
  }
  saySomething() {
    super.sayName();
  }
}

const laap = new Cat("laap", 2, "guitar");
console.log(laap);

const john = new Something("john", 4, "cartoons");
john.saySomething();