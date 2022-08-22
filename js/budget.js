//Calculate player expense button
document
  .getElementById("player-expenses-btn")
  .addEventListener("click", function () {
    const perPlayerCost = getInputValueByID("per-player-cost");
    ///Validation: 1) Number must be positive. 2) Must provide a number.
    if (perPlayerCost < 0) {
      return alert("Please provide positive amount.");
    } else if (isNaN(perPlayerCost)) {
      return alert("Please provide valid amount.");
    }
    const playerExpenses = perPlayerCost * 5;
    setElementValueByID("player-expenses", playerExpenses);
    document.getElementById("total-expenses-btn").removeAttribute("disabled");
  });
// ---------------------------
//Calculate total expense button
document
  .getElementById("total-expenses-btn")
  .addEventListener("click", function () {
    const playerExpenses = getElementValueByID("player-expenses");
    const managerCost = getInputValueByID("manager-cost");
    const coachCost = getInputValueByID("coach-cost");
    ///Validation: 1) Number must be positive. 2) Must provide a number.
    if (managerCost < 0 || coachCost < 0) {
      return alert("Please provide positive amount.");
    } else if (isNaN(managerCost) || isNaN(coachCost)) {
      return alert("Please provide valid amount.");
    }

    const totalCost = playerExpenses + managerCost + coachCost;
    setElementValueByID("total-expenses", totalCost);
  });
//----------------------------------
