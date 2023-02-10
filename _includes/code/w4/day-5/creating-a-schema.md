---
layout: default
permalink: /:path/:basename/
parent: Mongoose
grand_parent: 'Week 4: Serving Data'
nav_order: 3
---

We saw how to create a model but did not yes saw how to create a Mongoose Schema.

Let's first define what a cat is:

```
A cat has:
- Name
- Colors
- Adorableness
- Owner
- eyeColor
```

Translated to JS, we might end up with something like this:

```js
const catSchema = new Schema({
  name: Schema.Types.String,
  owner: Schema.Types.ObjectId,
  colors: [Schema.Types.String],
  eyeColor: String,
  adorableness: Schema.Types.Number,
})
```

A field like `eyeColor` might need some more specifications, a cat usually does not have bright red eyes, we might want to specify which value it can take.

To do so, we need to write `eyeColor` this way:

```js
const catSchema = new Schema({
  name: Schema.Types.String,
  owner: Schema.Types.ObjectId,
  colors: [Schema.Types.String],
  eyeColor: {
    type: String,
    enum: ['blue', 'green', 'yellow', 'bright red'],
    // enum is an Array where we can enumerate the possible value(s) eyeColor can take.
  },
  adorableness: Schema.Types.Number,
})
```

Let's add some more validation:

```js
const catSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    minLength: 2,
  },
  owner: Schema.Types.ObjectId,
  colors: [Schema.Types.String],
  eyeColor: {
    type: Schema.Types.String,
    enum: ['blue', 'green', 'yellow', 'bright red'],
    // enum is an Array where we can enumerate the possible value(s) eyeColor can take.
  },
  adorableness: {
    type: Schema.Types.Number,
    max: 10,
  },
})
```
