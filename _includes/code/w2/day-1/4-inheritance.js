class Human {
  constructor(amountOfLegs, name, age, height, speed) {
    this.legs = amountOfLegs
    this.name = name
    this.age = age
    this.height = height
    this.speed = speed
    this.isHurt = false
    this.position = 0
  }

  makeUpTime() {
    return `I don't do makeup`
  }
  getHurt() {
    this.isHurt = true
    this.speed -= Math.floor(Math.random() * 5) + 5
  }

  move() {
    this.position += this.speed
  }

  eat() {
    return `nom nom nom`
  }
}

class Female extends Human {
  constructor(amountOfLegs, name, age, height, speed) {
    super(amountOfLegs, name, age, height, speed)
    this.sex = 'Female'
  }

  makeUpTime() {
    return `I did have some time to do makeup this morning!`
  }
}
class Male extends Human {
  constructor(amountOfLegs, name, age, height, speed) {
    super(amountOfLegs, name, age, height, speed)
    this.sex = 'Male'
  }

  makeUpTime() {
    return `${super.makeUpTime()} it irritate my skin`
  }
}

const loopy = new Female(2, 'Loopy', 34, 172, 30)
const loop = new Male(2, 'Loop', 34, 172, 30)
const baseHuman = new Human(2, 'yo', 34, 172, 30)

// console.log(baseHuman.makeUpTime())
// console.log(loop.makeUpTime())
// console.log(loopy.makeUpTime())

class Sprinter extends Human {
  constructor(amountOfLegs, name, age, height, speed) {
    super(amountOfLegs, name, age, height, speed)
    this.isSprinting = false
  }

  sprint() {
    this.speed += 10
    this.isSprinting = true
  }
  stopSprinting() {
    this.speed -= 10
    this.isSprinting = false
  }
}

class Jogger extends Human {
  constructor(amountOfLegs, name, age, height, speed, amountOfDrinks) {
    super(amountOfLegs, name, age, height, speed)
    this.amountOfDrinks = amountOfDrinks
  }

  drinkEnergyDrink() {
    if (this.amountOfDrinks > 0) {
      this.speed += 5
      this.amountOfDrinks--
    }
  }
}

const students = [
  'Hiromi',
  'Marianne',
  'Delfina',
  'Mehdi',
  'Phu',
  'Soizic',
  'Michael',
  'Tom',
  'Thomas',
  'Sophie',
  'Ismet',
  'Sebastian',
  'Fabien',
  'Jean-Luc',
  'Lucie',
  'Emmanuelle',
  'Christ',
  'Loic',
  'Vishnu',
  'Arthur',
  'Keifer',
  'Cedric',
  'Kilian',
]

function getRandomSpeed(type) {
  if (type === 'jogger') {
    return Math.floor(Math.random() * 25) + 5
  } else {
    return Math.floor(Math.random() * 40) + 5
  }
}

const participants = students.map((name) => {
  if (Math.random() > 0.5) {
    return new Sprinter(2, name, 20, 175, getRandomSpeed('sprinter'))
  } else {
    return new Jogger(2, name, 20, 175, getRandomSpeed('jogger'), 3)
  }
})

class Race {
  constructor(participants) {
    this.participants = participants
    this.finishLine = 2000
  }
  race() {
    while (this.noOneReachedTheGoal()) {
      this.participants.forEach((runner) => {
        if (runner instanceof Jogger) {
          this.dealWithJogger(runner)
        } else {
          this.dealWithSprinter(runner)
        }
        if (!runner.isHurt && Math.random() > 0.98) {
          runner.getHurt()
        }

        runner.move()
      })
    }
    this.participants.sort((a, b) => b.position - a.position)
    console.log('Winners: ', this.participants.slice(0, 5))
  }

  dealWithSprinter(runner) {
    if (runner.isSprinting) {
      runner.stopSprinting()
    }
    if (Math.random() > 0.95) {
      runner.sprint()
    }
  }

  dealWithJogger(runner) {
    if (Math.random() > 0.9) {
      runner.drinkEnergyDrink()
    }
  }

  noOneReachedTheGoal() {
    const participantsReachFinishLine = this.participants.filter(
      (runner) => runner.position >= this.finishLine
    )
    return !participantsReachFinishLine.length >= 5

    // return this.participants.every(
    //   (participant) => participant.position < this.finishLine
    // )
  }
}

const theRace = new Race(participants)

theRace.race()
