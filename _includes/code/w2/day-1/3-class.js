// class Syntax

class Person {
  constructor(name) {
    this.name = name
  }
  talk() {
    return `${this.name} is talking!`
  }
}

const names = ['Bob', 'John', 'Alice', 'Flo', 'Loop']

const people = names.map((name) => new Person(name))
console.log('🚀 ~ file: 3-class.js:16 ~ people', people)
