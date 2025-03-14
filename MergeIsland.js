const display = document.getElementById("display");

const initial = document.getElementById("initial");
let initialNum = 0;
const final = document.getElementById("final");
let finalNum = 0;
const amount = document.getElementById("amount");
let amountNum = 0;

function Calculate(initial_T, final_T, amount) {
    let currentTier = final_T - initial_T;
    let currentAmount = amount;
    while (currentTier > 0) {
        currentAmount = (currentAmount - currentAmount % 2) * 5/2 + 3 * (currentAmount % 2);
        currentTier --;
    }
    return currentAmount;
}

function increaseInitial() {
    initialNum++;
    initial.value = initialNum;
}
function decreaseInitial() {
    initialNum--;
    initial.value = initialNum;
}
function increaseFinal() {
    finalNum++;
    final.value = finalNum;
}
function decreaseFinal() {
    finalNum--;
    final.value = finalNum;
}
function increaseAmount() {
    amountNum++;
    amount.value = amountNum;
}
function decreaseAmount() {
    amountNum--;
    amount.value = amountNum;
}
function changeDisplay() {
    display.value = Calculate(initialNum, finalNum, amountNum);
}