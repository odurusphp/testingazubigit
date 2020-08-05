let winCount = 0;
let failCount = 0;
const WIN_ELEMENT = document.getElementById('win');
const FAIL_ELEMENT = document.getElementById('fail');

/* Randomize items according to paramter - count - passed */
function randomizeItems(count) {
    if (!isNaN(count)) {
        let lists = [];
        for (let x = 1; x <= count; x++) {
            lists.push(x);
        }
        return lists.sort(() => Math.random() - 0.5);
    } 
}

/* 
    When a user clicks on a box, the user will be notified either Win or Fail
*/
function onBox(e) {
    // console.log(e);
    // console.log(e.target);
    const GET_ID = e.target.id;
    const GET_ITEM_ELEMENT = document.getElementById(`${GET_ID}`);
    const IS_CLICKED = GET_ITEM_ELEMENT.classList.contains("item-bg__win") || GET_ITEM_ELEMENT.classList.contains("item-bg__fail");
    // console.log(IS_CLICKED);
    if (IS_CLICKED) {
        alert("This box has been clicked! Please click on any blue box instead");
        return;
    }
    
    const SPLIT__ITEM_ID = GET_ID.split("-")[1];
    if (SPLIT__ITEM_ID % 2 == 0) {
        GET_ITEM_ELEMENT.classList.remove("item-bg__default");
        GET_ITEM_ELEMENT.classList.add("item-bg__win");
        GET_ITEM_ELEMENT.innerHTML = `<p class="text">WIN</p>`;
        console.log(GET_ITEM_ELEMENT.id);
        winCount++;
        alert("WIN");
        // console.log(`WIN ${winCount}`);
        WIN_ELEMENT.innerText = `WIN: ${winCount}`;
    } else {
        GET_ITEM_ELEMENT.classList.remove("item-bg__default");
        GET_ITEM_ELEMENT.classList.add("item-bg__fail");
        GET_ITEM_ELEMENT.innerHTML = `<p class="text">FAIL</p>`;
        console.log(GET_ITEM_ELEMENT);
        failCount++;
        alert("FAIL");
        // console.log(`FAIL ${failCount}`);
        FAIL_ELEMENT.innerText = `FAIL: ${failCount}`;
    }
}

// Start Game
function startGame() {
    let divCounts = randomizeItems(100);
    const DIV_ITEMS = document.querySelector(".items");

    for (let x = 1; x <= divCounts.length; x++) {
        // console.log(`item-${divCounts[x - 1]}`);
        const DIV_ITEM = document.createElement('div');
        DIV_ITEM.setAttribute('id', `item-${divCounts[x - 1]}`);
        DIV_ITEM.className = "item item-bg__default";
        DIV_ITEM.addEventListener('click', onBox);
        DIV_ITEMS.appendChild(DIV_ITEM);
    }
}

startGame();
