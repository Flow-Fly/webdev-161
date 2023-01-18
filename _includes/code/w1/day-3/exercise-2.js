/**
 * Florian => LRA
 */

const myName = "Florian";
let newName = "";

for (let i = 0; i < myName.length; i++) {
    if (i % 2 === 1) {
        newName += myName[i].toUpperCase();
    }
    console.log(myName[i], newName);
}

console.log(newName);
