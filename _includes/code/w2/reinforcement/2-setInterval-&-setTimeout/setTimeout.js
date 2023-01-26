let timeoutId = null;

const timeoutDiv = document.querySelector(`div`);


document.querySelector(`.set-timeout.start`).addEventListener(`click`, event => {
  if (timeoutId) {
    return;
  }

  const pElement = document.createElement(`p`);
  pElement.textContent = `another <p> element will be added after 3 seconds. click cancel timeout to cancel.`;

  timeoutDiv.append(pElement);

  timeoutId = setTimeout(() => {
    const pElement = document.createElement(`p`);
    pElement.textContent = `i was put here by setTimeout`;

    timeoutDiv.append(pElement);
  }, 3000);

});


document.querySelector(`.set-timeout.cancel`).addEventListener(`click`, event => {
  clearTimeout(timeoutId);
  timeoutId = null;
});

document.querySelector(`.set-timeout.clear`).addEventListener(`click`, event => {
  timeoutId = null;
  timeoutDiv.innerHTML = ``;
});