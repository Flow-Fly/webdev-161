---
title: class
date: 2022-01-16 08:00:00 +/-0000
categories: [week-1, day-1]
tags: [attributes, class, html, css]
---

# Class attribute

The class attribute is an HTML attribute that is used to specify a class name for an element. It is used to group elements that have similar characteristics or that will be styled in a similar way using CSS (Cascading Style Sheets).

>The class attribute can be added to any HTML element by including the class attribute in the opening tag of the element, followed by the class name. For example:
{: .prompt-tip}

```html
<div class="container">
  <p class="intro">This is a paragraph with the class "intro".</p>
  <p class="intro">This is another paragraph with the same class.</p>
</div>
```

In this example, both paragraphs have the class `"intro"`, which can be used to style them in the same way using CSS. The `div` element also has the class `"container"`, which could be used to style it differently from other div elements on the page.

>Multiple class names can be applied to the same element by separating them with a space. For example:
{: .prompt-tip }

```html
<p class="intro important">This is a paragraph with two classes: "intro" and "important".</p>
```

The class attribute is a powerful tool for styling and organizing content on a webpage. It allows you to create and apply styles to groups of elements, rather than having to style each element individually.