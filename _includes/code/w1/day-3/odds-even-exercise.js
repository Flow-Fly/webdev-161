// Simple odd-even

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
//     // console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
// }

// Fizzbuzz

for (let i = 1; i <= 20; i++) {
    let evenOrOdd;
    if (i % 2 === 0) {
        evenOrOdd = "even";
    } else {
        evenOrOdd = "odd";
    }

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`fizzbuzz is ${evenOrOdd}`);
    } else if (i % 5 === 0) {
        console.log(`buzz is ${evenOrOdd}`);
    } else if (i % 3 === 0) {
        console.log(`fizz is ${evenOrOdd}`);
    } else {
        console.log(`${i} is ${evenOrOdd}`);
    }
}
