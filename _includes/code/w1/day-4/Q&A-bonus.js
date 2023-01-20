// Casting string to Number

const five = '5'
console.log(Number('123'))
console.log(typeof Number('123'))
console.log(+'123')
console.log('123' * 1)
// Getting a fixed amount of decimals
const third = 1 / 3
console.log(third.toFixed(2))

// Looping for "I don't know how many iterations"

let myString = 'Hey'

while (myString.length < 2) {
  myString += ' Hey'
}
console.log('Updated  string after simple while ', myString)

do {
  myString += ' Hey'
} while (myString.length < 2)

console.log('Updated  string after do while ', myString)

// Q&A

// 'racecar'
// ra ce$%^1454car
// 'roma amor'
// A man, a plan, a canal – Panama

// * in upper case ?

const palindrom = 'gbdhjkgh   wkgh4613q  a'
let cleanedPalindrom = ''

for (let i = 0; i < palindrom.length; i++) {
  const currentCharacter = palindrom[i]
  if (currentCharacter.toUpperCase() !== currentCharacter.toLowerCase()) {
    cleanedPalindrom += currentCharacter.toLowerCase()
  }
  // if (currentCharacter.toUpperCase() === currentCharacter.toLowerCase()) {
  //   continue
  // } else {
  //   cleanedPalindrom += currentCharacter.toLowerCase()
  // }
}
console.log(cleanedPalindrom)

let isAPalindrom = true

for (let i = 0; i < cleanedPalindrom.length; i++) {
  const currentCharacter = cleanedPalindrom[i]
  const lastCharacter = cleanedPalindrom[cleanedPalindrom.length - 1 - i]
  if (currentCharacter !== lastCharacter) {
    isAPalindrom = false
    break
  }
}

if (isAPalindrom) {
  console.log(`${palindrom} is a palindrom`)
} else {
  console.log(`${palindrom} is not a palindrom`)
}
