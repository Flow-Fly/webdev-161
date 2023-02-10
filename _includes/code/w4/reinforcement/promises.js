const howAreYou = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) {
    setTimeout(() => reject("Bad"), 1000);
  } else {
    setTimeout(() => resolve("Fine"), 500);
  }
});

// using howAreYou with .then()
howAreYou
  .then(resolved => console.log(resolved))
  .catch(rejected => console.log(rejected));

// using howAreYou with async-await
(async () => {
  try {
    const result = await howAreYou;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();

// fetching data using async-await
async function getData() {
  const result = await fetch("https://google.com");

  const text = await result.text();

  console.log(text);
}

getData();


/* 
async-await does the same thing as .then(), the only difference is that it allows us write asynchronous code and consume promises in a way that is similar to the way we normally write synchronous code
*/