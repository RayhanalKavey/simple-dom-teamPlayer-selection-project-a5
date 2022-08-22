//Get input field value by ID
function getInputValueByID(ID) {
  const inputValue = parseFloat(document.getElementById(ID).value);
  return inputValue;
}
//Get element  value by ID
function getElementValueByID(ID) {
  const elementValue = parseFloat(document.getElementById(ID).innerText);
  return elementValue;
}
//Set element  value by ID
function setElementValueByID(ID, value) {
  const elementField = document.getElementById(ID);
  elementField.innerText = value;
}
