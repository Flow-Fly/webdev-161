const getAllBtn = document.querySelector("#get-all");
const template = document.querySelector("template");

const form = document.querySelector("form");
const personInput = form.querySelector("[name=person]");
const colorInput = form.querySelector("[name=color]");
const submitBtn = form.querySelector("[type=submit]");



getAllBtn.addEventListener("click", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/colors");
    const allColors = response.data;


    allColors.forEach(el => {
      const clone = template.content.cloneNode("true");

      clone.querySelector("h2").textContent = el.person;
      clone.querySelector("p").textContent = el.color;

      document.body.append(clone);
    });
  } catch (error) {
    console.error(error);
  }
});


form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const newFavColor = {
      person: personInput.value,
      color: colorInput.value
    };

    const response = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/colors',
      data: newFavColor
    });

    const createdColor = response.data;
    const clone = template.content.cloneNode("true");

    clone.querySelector("h2").textContent = `${createdColor.person} - ${createdColor._id}`;
    clone.querySelector("p").textContent = createdColor.color;

    document.body.append(clone);
  } catch (error) {
    console.error(error);
    submitBtn.style.backgroundColor = "red";
    setTimeout(() => {
      submitBtn.style.backgroundColor = null;
    }, 800);
  }

});