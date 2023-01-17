---
title: Responsive Design
date: 2023-01-17 08:00:00 +/-0000
categories: [module-1, week-1]
tags: [css, responsive, design, media, flexbox]
---

# Module-1, Week-1, Day-2

>M1W1D2

Mobile-first is the moto for web-development and there is a good reason for that, designing for a mobile (small screen) is easier than for bigger screens so it's a great starting point to implement our website, it's easier, demand less code and this way, we don't forget people using their mobile to access our website!

Typically, most of the rules you're going to write in your css file, are going to be in the general scope (Not inside a media query) and will define how the website will look on mobile.

We then write down some media query to define how the website will look on bigger screensize.

Here is the general structure of a media query:

```css
@media (width > 600px) {
  selector {
    property: value;
  }
  otherSelector nestedSelector {
    property: value;
  }
}
```

All of the rules inside of the media-query will be applied only if the width of our screen is strictly bigger than 600px (in this example).

## Titles

font-size of titles can be modified so that their size increase when the screen gets bigger.
To do so we rely on units like `vw` (viewport-width), 50vw is half of the viewport size.

[Check the example from the class]({% post_url /CSS/2023-01-17-Responsive-titles %})

## Modifying flexboxes with media-queries

The inherent concept is rather straightforward, typically, if I am on a mobile, I want my elements to be displayed in a column, when I am on a bigger screen, I will want elements to be displayed in a row or at the very least take a little more space on my screen.

[Check the example from the class]({% post_url /w1/day-2/2023-01-17-Class-example %})
