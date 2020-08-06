document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    let width = 10;
    let failAmount = 20;
    let squares = [];

    //Create Board
    function createBoard() {
        //get random game array with random bombs,
        const failArray = Array(failAmount).fill("fail");
        console.log(failArray);
        const winArray = Array(width * width - failAmount).fill("win");

        const gameArray = winArray.concat(failArray);
        console.log(gameArray);
        const randomArray = gameArray.sort(() => Math.random() - 0.5);

        for (let i = 0; i < width * width; i++) {
            const square = document.createElement("div");
            square.setAttribute("id", i);
            square.classList.add(randomArray[i]);
            grid.appendChild(square);
            squares.push(square);
            square.addEventListener("click", () => {
                const result = document.getElementById("result");
                if (document.getElementById(i).classList.contains("fail")) {
                    result.innerHTML = "Failed";
                    document.getElementById(i).innerHTML = "*";
                    document.getElementById(i).classList.add("failed");
                } else {
                    result.innerHTML = "Win";
                    document.getElementById(i).classList.add("winner");
                }
            });
        }
    }
    createBoard();

/*
//add number
for (let i = 0; < squares.length; i++){
const isLeftEdge = i % width === 0
const isRightEdge = i === width -1)

if (square[i].classList.contains('valid')) {
if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) total ++
if (i > 9 && !isLeftEdge && squares[i + 1].classList.contains('bomb')) total++
if (i > 10 && squares[i - width].classList.contains('bomb')) total++
if (i > 0 && !isLeftEdge && squares[i - 1 -width].classList.contains('bomb')) total++
square[i].setAttribute('data', total)
console.log(squares[i])
}
}*/
});