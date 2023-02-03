let a = `hi`;
let b = a;

b += ` hello`;

console.log(a);  // `hi`
console.log(b);  // `hi hello`




const arr1 = [12, `string`, {a: 7, b: 5}, [8, 9]];
const arr2 = arr1;  // arr2 holds a reference to arr1
const shallowCopy = [...arr1];  // [12, `string`, <reference to: {a: 7, b: 5}>, <reference to: [8, 9]>]
const deepCopy = structuredClone(arr1);   // [12, `string`, {a: 7, b: 5}, [8, 9]]

console.log(arr1);  // [12, `string`, {a: 7, b: 5}, [8, 9]]
console.log(arr2);  // [12, `string`, {a: 7, b: 5}, [8, 9]]
console.log(shallowCopy);  // [12, `string`, {a: 7, b: 5}, [8, 9]]
console.log(deepCopy);  // [12, `string`, {a: 7, b: 5}, [8, 9]]

arr1[0] = 0;

console.log(arr1);  // [0, `string`, {a: 7, b: 5}, [8, 9]]
console.log(arr2);  // [0, `string`, {a: 7, b: 5}, [8, 9]]
console.log(shallowCopy);  // [12, `string`, {a: 7, b: 5}, [8, 9]]
console.log(deepCopy);  // [12, `string`, {a: 7, b: 5}, [8, 9]]

arr1[2].a = 0;

console.log(arr1);  // [0, `string`, {a: 0, b: 5}, [8, 9]]
console.log(arr2);  // [0, `string`, {a: 0, b: 5}, [8, 9]]
console.log(shallowCopy);  // [12, `string`, {a: 0, b: 5}, [8, 9]]
console.log(deepCopy);  // [12, `string`, {a: 7, b: 5}, [8, 9]]