
const form = document.getElementById("numberForm");
const input = document.getElementById("numberInput");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    // Keep the browser from refreshing the page.
    event.preventDefault();

    const number = Number(input.value);
    let message = "";

    if (input.value.trim() === "") {
        message = "Please enter a number first.";
    } else if (number <= 0 || number >= 600) {
        message = "Please enter a number.";
    } else if (number <= 50) {
        message = "You are extremely low. Please eat suger or drink a sugary beverage.";
    } else if (number <= 80) {
        message = "You are low. Please eat something soon.";
    } else if (number <= 120) {
        message = "You are in a normal range.";
    } else if (number <= 220) {
        message = "You are high. Please take insulin and drink water.";
    } else {
        message = "You are extremely high. Please take insulin and drink water.";
    }

    result.textContent = message;
});
