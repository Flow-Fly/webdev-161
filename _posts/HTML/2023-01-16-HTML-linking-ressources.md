---
title: Importing ressources
date: 2022-01-16 08:00:00 +/-0000
categories: [Module-1, day-1]
tags: [link, css, JS, JavaScript, img, import, module]
---

# How to import ressources

When creating your webpage, you don't want it to be just plain text, so we'll need CSS to style it.
You will discover that a lot of the time we want to split all of our files, this is called [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).
We want to split everything so that our website are easier to manage and update.

For all the next examples, we will assume that we have this folder structure:
![structured folder](https://imgur.com/gMhveds.png){: .w-50 }

## Importing CSS

To import CSS in our html, we need to link it, this is done inside of the `head` of the html.

```html
<html>
  <head>
      <link rel="stylesheet" href="./css/main.css">
  </head>
  <body>
    <!-- Some content here :) -->
  </body>  
</html>
```

The [`rel` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel), is just here to specify that we will load a stylesheet.
The `href` attribute is the path to the file based on where the HTML file is.

> What does `./` actually mean ??
> The `.` actually stands for "the folder I'm currently in" so it is the folder where the HTML file is located. And in this folder there is supposedly an other folder named `css` and in this subfolder the his, eventually, the `main.css` file.
{: .prompt-info }

## Importing JavaScript

As for CSS, we will need to import our JavaScript file(s).
You will encounter this "old way" of importing:

```html
<html>
  <head>
      <link rel="stylesheet" href="./css/main.css">
  </head>
  <body>
    <!-- Some content here :) -->
    <script src="./js/script.js"></script>
  </body>  
</html>
```

Here the script is loaded after the content of the HTML page, this is useful as we will probably do some DOM manipulation in the JavaScript file and we need to have the HTML to be loaded before we actually do the manipulations (You can't eat a cake cefore having prepared it, can you?).

But nowadays we mostly import JavaScript file this way:

```html
<html>
  <head>
    <link rel="stylesheet" href="./css/main.css">
    <script src="./js/script.js" type="module"></script>
  </head>
  <body>
    <!-- Some content here :) -->
  </body>  
</html>
```

We move the `script` tag in the head and had the type of **module**. Basically what this does is:

- Load the JavaScript after the rest of the HTML.
- Enable strict-mode (better error-handling).
- enable import / export.

## importing from the CSS

You want to add a really nice background-image 