// In the browser = > Window object
// In node, we get module.exports which is an object
console.log(this)

const me = {
  name: 'Flo',
  talk: function () {
    return `${this.name} is talking!`
  },
  that: this,
}

const ines = {
  name: 'Ines',
  talk: function () {
    return `${this.name} is talking!`
  },
  that: this,
}

console.log(me.talk())
console.log(ines.talk())

function Person(name) {
  // this = {}
  this.name = name
  this.talk = function () {
    return `${this.name} is talking!`
  }

  // return this
}

const haroun = new Person('Haroun')
const bob = new Person('Bob')
console.log(haroun)
console.log(haroun.talk())
console.log(bob.talk())

// const string = 'hey'
