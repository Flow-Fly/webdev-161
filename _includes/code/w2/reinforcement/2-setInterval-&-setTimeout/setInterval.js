let counter = 0;
let intervalId = null;

const ulElement = document.querySelector(`ul`);


document.querySelector(`.set-interval.start`).addEventListener(`click`, event => {
  if (intervalId) {
    return;
  }

  intervalId = setInterval(() => {
    counter++;

    const liElement = document.createElement(`li`);
    liElement.textContent = `counter is now: ${counter}`;
    ulElement.append(liElement);
  }, 1000);

});


document.querySelector(`.set-interval.stop`).addEventListener(`click`, event => {
  clearInterval(intervalId);
  intervalId = null;
});

document.querySelector(`.set-interval.clear`).addEventListener(`click`, event => {
  if (intervalId) {
    return;
  }

  ulElement.innerHTML = ``;
  counter = 0;
});