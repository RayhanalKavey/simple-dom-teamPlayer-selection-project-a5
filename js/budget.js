function getInputValueByID(ID) {
  const inputField = document.getElementById(ID);
  return inputField.value;
}
//Calculate player expense button
document
  .getElementById("player-expenses")
  .addEventListener("click", function () {
    const perPlayerCost = getInputValueByID("per-player-cost");
    console.log(perPlayerCost);
    // console.log("player expense button clicked.");
  });
//Calculate total expense button
document
  .getElementById("total-expenses")
  .addEventListener("click", function () {
    const managerCost = getInputValueByID("manager-cost");
    const coachCost = getInputValueByID("coach-cost");
    console.log(managerCost, coachCost);
    // console.log("Total expense button clicked.");
  });
