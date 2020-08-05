document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let width = 10;
  let failBoxes = 20;
  let squares = [];
  var x = 0;
  var y = 0;

  //create board
  function createBoard() {
    //creat random fail boxes array and remaining win boxes array
    const failArray = Array(failBoxes).fill('fail');
    const winArray = Array(width * width - failBoxes).fill('win');
    const gameArray = failArray.concat(winArray);
    console.log(gameArray);
    const randomArray = gameArray.sort(() => Math.random() - 0.5);
    console.log(randomArray);

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      square.setAttribute('id', i);
      square.classList.add(randomArray[i]);
      grid.appendChild(square);
      squares.push(square);
      // square.addEventListener('click', function(e){
      //   click(square)
      // })
    }
  }
  createBoard();

  //Add click listener to each box/square
  squares.forEach((element) => {
    element.addEventListener('click', function (e) {
      click(this);
    });
  });

  //Function to display Win of Fail when am empty box/square is clicked
  function click(square) {
    if (square.innerHTML == 'Win' || square.innerHTML == 'Fail') {
      alert('This square has already been clicked. Click on an empty square.');
    } else if (square.classList.contains('win')) {
      square.style.backgroundColor = 'lime';
      square.innerHTML = 'Win';
      alert('Win!');
      x++;
      document.getElementById('win-count').innerHTML =
        'You have ' + x + ' Win(s)!';
    } else {
      square.style.backgroundColor = 'red';
      square.innerHTML = 'Fail';
      alert('Failed!');
      y++;
      document.getElementById('fail-count').innerHTML =
        'You have ' + y + ' Fail(s)!';
    }
  }
});
