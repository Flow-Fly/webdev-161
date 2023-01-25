

# Inputs

- The most important thing about input is that you can't access it's textContent, you will need to access the `value` of the input to get any information.
- Some inputs (like the radio type or checkbox type) will have a property called `checked` which will be true when the input is selected. Since those inputs usually go in a group, you will prbably need to select all of them and loop through them to apply some logic to the one which was checked.
