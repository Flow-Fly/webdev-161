const arr = ["hello", "bye", "bonjour"];
const cat = {
  name: "loop",
  age: "1",
  talent: "none",
  key: "hello"
};

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

arr.forEach(el => console.log(el));

for (let key in arr) {
  console.log(key, arr[key]);
}

for (let key in cat) {
  console.log(key, cat[key]);
}

for (let value of arr) {
  console.log(value);
}

// for of doesn't work on objects
for (let value of cat) {
  console.log(value);
}
// for of doesn't work on objects
