document.addEventListener('DOMContentLoaded', () => {
    const GRID = document.querySelector('.grid')
    let width = 10
    let failAmount = 20
    let squares = []

    //creating Board
    function createBoard() {
        //shuffling random fail notifications
        const FAILARRAY = Array(failAmount).fill('Failed')
        const WINARRAY = Array(width * width - failAmount).fill('Win')
        const GAMEARRAY = WINARRAY.concat(FAILARRAY)
        const SHUFFLEDARRAY = GAMEARRAY.sort(() => Math.random() - 0.5)


        for (let i = 0; i < width * width; i++) {
            const SQUARE = document.createElement('div')
            SQUARE.setAttribute('id', i)
            SQUARE.classList.add(SHUFFLEDARRAY[i])
            GRID.appendChild(SQUARE)
            squares.push(SQUARE)


            //normal click
            SQUARE.addEventListener('click', function(e) {
                click(SQUARE)
            })
        }

    }
    createBoard()

    //clicking squares on board
    function click(SQUARE) {
        if (SQUARE.classList.contains('Failed')) {
            alert('Failed')
        } else {
            alert('Win')
        }
    }


})