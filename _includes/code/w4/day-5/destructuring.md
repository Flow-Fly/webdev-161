---
layout: default
permalink: /:path/:basename/
parent: Mongoose
grand_parent: 'Week 4: Serving Data'
nav_order: 1
---

# Destructuring

Destructuring is awesome!
It is all about getting some values from Objects and Arrays in an easy way.

```js
const aDisneyBadGuy = {
  name: 'Raspoutine',
  age: 47,
  visited: [
    {
      country: 'Russia',
      city: ['St-Petersburg', 'Moskow'],
    },
    {
      country: 'France',
      city: ['Paris'],
    },
  ],
}
```

To get all of the informations from the `aDisneyBadGuy` variable, we could do it this way:

```js
const name = aDisneyBadGuy.name
const age = aDisneyBadGuy.age
const firstVisitedCountry = aDisneyBadGuy.visitedCountries[0].country
const firstVisitedCityInFirstVisitedCountry =
  aDisneyBadGuy.visitedCountries[0].city[0]
```

As you can see it can become painful quite quickly, destructuring allow us to prevent that!
The destructuring need to match the JavaScript Object we're extracting it from:

```js
const {
  name,
  age,
  visited
}
// name =>  "Raspoutine"
// age => 47
// visited => [{country: '...', city:[...]}, {...}]
```

We just destructured the first level of our `aDisneyBadGuy` variable. You will use destructuring this way about 95% of the time.
On rare occasions, you might want to access nested Object / Arrays, you can do that aswell:

```js
const {
  name,
  age,
  visited: [
    firstCountry,
    {
      city: [beautifulCity]
    }
  ]
}
// firstCountry => {
//    country => 'Russia',
//    city => ['St-Petersburg', 'Moskow'],
//    }
// beautifulCity => "Paris"
```

If we just want to get all of the cities in Russia and the rest of the informations (name, age), we can use the rest operator `...`

```js
const {
  visited: [
    {city: allCitiesInRussia}
  ],
  ...otherInformations
  }
  // allCitiesInRussia => ['St-Petersburg', 'Moskow']
  // otherInformations => {name: 'Raspoutine', age: 47}
```

> Course examples

```js
{% include_relative 0-destructuring.js %}
```
