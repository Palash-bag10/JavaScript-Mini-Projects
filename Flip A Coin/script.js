let heads = 0;
let tails = 0;
const coin = document.querySelector(".coins");
const flipBtn = document.querySelector(".flip-btn");
const resetBtn = document.querySelector(".reset-btn");

flipBtn.addEventListener("click", () => {
    let flip = Math.floor(Math.random() * 2);
    coin.style.animation = "none";

    if(flip){
        setTimeout(function () {
            coin.style.animation = "spin-heads 3s forwards"
        },100);
        heads++;
    }
    else{
        setTimeout(function () {
            coin.style.animation = "spin-tails 3s forwards"
        },100);
        tails++;
    }
    console.log(flip);
    setTimeout(updateResults, 3000);
    disableButton();
})



const headCounts = document.querySelector(".head-counts")
const tailCounts = document.querySelector(".tail-counts")
function updateResults() {
    headCounts.textContent = `Heads: ${heads}`;
    tailCounts.textContent = `Tails: ${tails}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    },3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateResults();
})