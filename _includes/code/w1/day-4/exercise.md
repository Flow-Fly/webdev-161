# Exercise on Objects

## Exercise 1:
Create and object based on those informations:
> Ironhacker
> 
> firstName: `<your firstName>`
> 
> secretPower: `<your secret power>`
> 
> favoriteColors: [`<some>`, `<of>`, `<your>`, `<favorite>`, `<colors>`]

Log the object in your console.

## Exercise 2:
- Declare a cat variable and assign it an empty Object.
- Add the `name` property to the cat Object, pick the name of your choice :)
- Add the `age` property.
- Add the `is this cat cute?` property and assign a Bolean value to it.
- declare a variable called `location`, it should be an object containing a `street` key, a `city` key and a `phone` key. Fill them as needed.
- Add the `adresss` key to the `cat` and assign it the `location` variable
- Modify the name of the cat.

Here is an example of what your final object might look like when logging it to the console.

<img src="https://i.imgur.com/aJbIfye.png" alt="representation of the cat object" />

## Exercise 3:

Here is another cat :

```js

const cat = {
  name: "Zouzou",
  age: 7,
  isCute: true,
  details: {
    superPowers: ["Sleeping", "Eating", "Maw"],
    hobbies: ["Sleeping on a keyboard", "Pretending to be scary"],
    "weekday whereabout": [
      {day: "Monday", location: "Garage", activity: "Making a mess"},
      {day: "Tuesday", location: "Living-room", activity: "Sleeping"},
      {day: "Wednesday", location: "Bedroom", activity: "Warming the bed"},
    ]
  }
}


```
- `console.log()` one of the hobbies
- `console.log()` the length of the `superPowers` Array
- do a loop on the cat `weekday whereabout` and log `On <DAY>, my cat is in the <LOCATION> and he is <ACTIVITY>`
- <details>
  <summary>Hint !</summary>
  Use a <code>for-of</code> loop on the <code>weekday whereabout</code> array !
 </details>
 
- delete the `age` of the cat !
- Done ? Now do a loop again on the `weekday whereabout` and log `On <DAY>, my cat is in the <LOCATION> and he is <ACTIVITY>`, only when the cat is not sleeping !
- Last activity : create a function that take an `Array` as argument and make it return a random element from the Array ! Use this function on any Array of the `cat` Object and log the result.
- <details>
  <summary>Hint !</summary>
  Math Class and some of it's built-in method will help you !
 </details>

