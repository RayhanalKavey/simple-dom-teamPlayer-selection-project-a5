const cardArray = [];
function displaySelectedPlayer(names) {
  const orderedListField = document.getElementById("lists-body");
  orderedListField.innerText = "";
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const li = document.createElement("li");
    li.className = "mb-4";
    li.innerText = name;
    orderedListField.appendChild(li);
  }
}
function addToSelectionBox(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;
  //disable the clicked button
  element.setAttribute("disabled", "");
  cardArray.push(playerName);
  //Validation: Set updated count and check if the count is grater then 5
  const countPlayers = cardArray.length;
  if (countPlayers <= 5) {
    setElementValueByID("total-selection", countPlayers);
    element.style.backgroundColor = "gray";
  } else {
    return alert("Already 5 players added.");
  }
  //call for display function
  displaySelectedPlayer(cardArray);
}
// const c = document.getElementById("player-expenses").parentNode;
// console.log(c);
//  document.getElementById("total-expenses-btn").removeAttribute("disabled");
