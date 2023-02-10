const cat = {
  name: 'Illiu',
  age: 2,
  cutenessLevel: Infinity,
  eyes: [{ name: 'left' }, { name: 'right' }],
}

const {
  eyes: [, { name: rightEye }],
} = cat
console.log(rightEye)

const catName = cat.name
const catAge = cat.age
const catCute = cat.cutenessLevel

const { name, age, cutenessLevel } = cat

console.log(name, age, cutenessLevel)
console.log(catName, catAge, catCute)

const mammal = ['Dolphin', 'Human', 'Whale']
const plants = ['Cacti', 'Sequoia', 'Maple tree']
//  => Cacti     ['Sequoia', 'Maple tree']
const [firstPlant, ...theOthers] = plants
const [, , maple] = plants
console.log(firstPlant, maple, theOthers)
const joinedArray = [...mammal, ...plants]

console.log(joinedArray)

// element.addEventListener('click', (event) => {
// 	const {target} = event
// 	console.log(target)
// })
