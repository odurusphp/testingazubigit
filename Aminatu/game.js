document.addEventListener('DOMcontentloaded',() => {

    const grid =document.querySelector('.grid')
    let width =10
    let bombsAmount = 20
    let squares=[]

    function createGame(){
        for(let i=0;  i< width*2; i++) {
            const bombsArray =Array(bombsAmount).fil('bomb')
             const emptyArray = Array (width*2-bombsAmount).fill(failed)
 console.log(bombsArray);
 console.log(emptyArray)
const gameArray = emptyArray.concat(bombsArray)
 console.console.log(gameArray);

            const square = document.createElement(div)
            square.setAttribute(id, i)
grid.appendChild(square)
squares.push()

        }
    }
    
createGame()
})