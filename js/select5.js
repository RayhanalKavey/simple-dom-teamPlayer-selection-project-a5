const cardArray = [];

function addToSelectionBox(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;

  cardArray.push(playerName);
  //Validation: Set updated count and check if the count is grater then 5
  const countPlayers = cardArray.length;
  if (countPlayers <= 5) {
    setElementValueByID("total-selection", countPlayers);
  } else {
    return alert("Already 5 players added.");
  }
  //call for display function
  displaySelectedPlayer(cardArray);
}
