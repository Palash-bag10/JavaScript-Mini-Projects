const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".new-game");

let currentPlayer;
let gameGrid;

const winPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [3,5,8],
    [0,4,8],
    [2,4,6]
];

// let's create a function to initialize the game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    // Empty all boxes and Update in UI
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        // initialized the box with css property again
        box.classList = `box box${index+1}`;

    })
    newGameBtn.classList.remove("active");
    // Show Currnet player Content
    gameInfo.innerText = `Current Player - ${currentPlayer}`;

}

initGame();

function swapTurn() {
    if(currentPlayer === "X") {
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }

    // UI update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
    let answer = "";
    
    winPosition.forEach((position) => {
        // All 3 Boxes Should be non-empty and exactly same in value

        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])) {
            // check if winner is X
            if(gameGrid[position[0]] === "X"){
                answer = "X";
            }
            else{
                answer = "O";
            }

            // Disable pointer event
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            // Now we know X/O is winner
            // add the background color in winner box
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

    // Now we have a winnner then we show "winner" text in Game Info container and active new Game Button
    if(answer !== ""){
    gameInfo.innerText = `Winner Player - ${answer}`;
    newGameBtn.classList.add("active");
    return;
    }

    // when there is no winner or match tied
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "")
        fillCount++;
    });

    // when Game grid is fill, show game tie
    if(fillCount == 9) {
        gameInfo.innerText = "Game Tied";
        newGameBtn.classList.add("active");
    }

}

function handleClick(index) {
    if(gameGrid[index] === "" ) {
        // below line update the value in UI (X/0)
        boxes[index].innerText = currentPlayer;
        // below line update the value in Our Inner logic which was created in initGame function
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // Swap the Turn(x -> O) or (O -> x)
        swapTurn();
        //check anyone win or not
        checkGameOver(); 
    }
}



boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);
