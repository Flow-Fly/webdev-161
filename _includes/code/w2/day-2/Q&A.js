class Human {
  constructor(name) {
    this.name = name
  }
  eat() {
    return 'nom nom nom'
  }
  wash() {
    return 'water is running'
  }
}

class Person extends Human {
  constructor(name, job) {
    super(name)
    this.job = job
  }
  eat() {
    const random = Math.random() > 0.5
    if (random) {
      return `I am eating, ${super.eat()}`
    } else {
      return 'nothing to eat'
    }
  }

  work(time) {
    return `I am ${this.name} working for ${time} hours`
  }
  overtime(normalWork, extra) {
    return `${this.work(normalWork)} including ${extra} extra hours`
  }
}

const me = new Person('Flo', 'dev')

console.log(me.eat())
console.log(me.wash())
console.log(me.work(10))
console.log(me.overtime(12, 5))
