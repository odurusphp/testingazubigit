document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let width = 10;
    let fails = 20;
    let squares = [];
  

     createBoard = () =>{
         
      const fails_array = Array(fails).fill('fail');
      const wins_array = Array(width * width - fails).fill('win');
      const games_array = fails_array.concat(wins_array);
      const random = games_array.sort(() => Math.random() - 0.5);
  
      for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        square.classList.add(random[i]);
        grid.appendChild(square);
        squares.push(square);
      }
    }
    createBoard();
    console.log(squares);
  
    
    squares.forEach((element) => {
      element.addEventListener('click', function (e) {
        click(this);
      });
    });
  

    click = (square) => {
    if (square.classList.contains('win')) {
        square.style.backgroundColor = '#c4fb6d';
        square.innerHTML = 'Win';
      } else {
        square.style.backgroundColor = '#e7305b';
        square.innerHTML = 'Fail';
      }
    }
  });
  