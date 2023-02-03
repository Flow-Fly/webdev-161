const addPButton = document.querySelector(`#add-p`);
const clearButton = document.querySelector(`#clear`);
const paragraphsDiv = document.querySelector(`#paragraphs`);


addPButton.addEventListener(`click`, event => {
  const span = document.createElement(`span`);
  span.textContent = `hello friend!`;

  const deleteButton = document.createElement(`button`);
  deleteButton.textContent = `delete`;
  deleteButton.addEventListener(`click`, event => {
    event.target.parentElement.remove();
  }, { once: true });

  const spanDiv = document.createElement(`div`);
  spanDiv.append(span, deleteButton);

  paragraphsDiv.append(spanDiv);
});