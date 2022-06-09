const minNum = 1;
const maxNum = 6;

function rollTheDice() {
    let random = Math.floor(Math.random() * maxNum + 1);
    let para = document.getElementById("diceresult");
    para.innerHTML = random;
}