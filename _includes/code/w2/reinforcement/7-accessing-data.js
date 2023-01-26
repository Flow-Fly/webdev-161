// primitive data types
const num = 9;
const str = "hello";
const bool = true;
const bigInt = BigInt(Number.MAX_SAFE_INTEGER);
const und = undefined;
const nul = null;
const smbl = Symbol("foo");


// non primitives
const arr = ["hello", "bye", "bonjour"];
const cat = {
  name: "loop",
  age: "1",
  talent: "none",
  key: "hello",
  "key with space": 99,
  hobbies: {
    like: ["judging people", "sleep"],
    dislikes: ["mondays", "coffee"]
  }
};

console.log(cat.hobbies.dislikes[1]);

let numCopy = num;

console.log(numCopy === num);
numCopy = 8;
console.log(numCopy, num);


let arrCopy = arr;
console.log(arrCopy === arr);
arrCopy[0] = "ola";
console.log(arrCopy, arr);


let emptyArr = [];
console.log(emptyArr === []);

const key = "name";

console.log(cat.name);
console.log(cat[key]);
console.log(cat["name"]);


const loopsDislikes = cat.hobbies.dislikes;
loopsDislikes.push("self");

console.log(loopsDislikes, cat);

const laap = { ...cat };

laap.name = "laap";

console.log(cat.name);

laap.hobbies.like.push("chaos");
console.log(laap.hobbies.like);
console.log(cat.hobbies.like);

// with structuredjClone() the clone is entirely seperate from the original