---
title: JS history
date: 2023-01-18 08:00:00 +/-0000
categories: [module-1, week-1]
tags: [JavaScript, ECMAScript, Brendan Eich]
---

## Intro to JS

We'll be taking a look together at the basics of JavaScript.

## History

The original version of JavaScript was written by Brendan Eich in 10 days.

It was intended to enhance the capabilities of Netscape Navigator 2.0,
the most anticipated technology release of all time *[citation needed]*
and your granddad's favourite web browser from when he used to log onto the World Wide Web in 1995 and share cat gifs.
How times have changed!

JavaScript became the _third language of the web_, after HTML and CSS.

Fun fact: the release of the iPhone is nearer the introduction of JavaScript (12 years) than to present day (15 years).
Web technology is saturating, and slowing down.

### JScript and the Browser Wars

Microsoft, back in its full antitrust evil mode, sought to kill off competitors and dominate the web.

It released Internet Explorer 2.0 with _JScript_, a competitor to JavaScript which wasn't fully compatible with it.

This, naturally, presented a huge headache for developers: for their

Enter _ECMA_: the _European Computer Manufacturers Association_. Now known as _European association for standardizing information and communication systems_ (catchy!), _Ecma_ did what European associations do best: they defined standards.
And they did what they do worst: 

ECMA has provided at least 6 major versions of a web-scripting technology:

1. ECMA-262, also known as ECMAScript, released in June 1997
2. ECMAScript 2, June 1998
3. ECMAScript 3, December 1999
4. ECMAScript 4, widely incompatible with previous versions and criticised and thus abandoned
5. ECMAScript 5, previously ES3.1, supposed to be an in-place improvement to ES3, released December 2009
6. ECMAScript 6, or ES2015, the latest "living standard" version of JavaScript, released in 2015

Since 2015, ECMAScript 7, 8 or ES2016, ES2017 etc, are incremental updates released each year.

In all cases, ECMAScript is not a language, but a _standard_: a specification that browsers agree to meet.

Learn more:

- [ECMAScript on fr.wikipedia](https://fr.wikipedia.org/wiki/ECMAScript)
- [ECMAScript on en.wikipedia](https://en.wikipedia.org/wiki/ECMAScript)
- [ECMAScript on it.wikipedia](https://it.wikipedia.org/wiki/ECMAScript)

## You don't need to know the history

Luckily, you don't need to know the history of JavaScript to be able to use it, or to get a job in it.

Where it helps to know the history is in understanding _why_ certain things are the way they are.

The example of _ES4_ tells answers the question you may have: _why don't they just fix it?_

Making a _breaking change_ to a language specification means that **all existing code may stop working**.
This is a bad idea: we want our browsers to be backwards compatible, and so the ECMAScript specifications should be.
