let incomeEl = document.getElementById("income");
let incomeBtn = document.getElementById("income-btn");
let incomeSummary = document.getElementById("income-summary");
let incomeMsg = document.getElementById("income-msg")
let incomeTotal = 0;


incomeBtn.addEventListener("click", function () {
    const n = Number(incomeEl.value);

    if (incomeEl.value === "" || Number.isNaN(n)) {
        incomeMsg.textContent = "Pleaser enter a number"
        return;
    }
    incomeTotal += n;
    incomeSummary.textContent = incomeTotal;
    incomeEl.value = ""
    incomeMsg.textContent = ""
})



