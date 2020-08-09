let winCount = 0;
let failCount = 0;

// Randomizer
function randomizeItems(count) {
    if (!isNaN(count)) {
        let lists = [];
        for (let x = 1; x <= count; x++) {
            lists.push(x);
        }
        return lists.sort(() => Math.random() - 0.5);
    } 
}

// game results based on randomizer
function onBox(e) {
    const GET_ID = e.target.id;
    const GET_ITEM_ELEMENT = document.getElementById(`${GET_ID}`);
    const IS_CLICKED = GET_ITEM_ELEMENT.classList.contains("item-bg__win")
        || GET_ITEM_ELEMENT.classList.contains("item-bg__fail");
    if (IS_CLICKED) {
        alert("This box has been clicked! Please click on any red box instead");
        return;
    }
    
    const SPLIT__ITEM_ID = GET_ID.split("-")[1];
    const IS_EVEN = SPLIT__ITEM_ID % 2 == 0;
    GET_ITEM_ELEMENT.classList.remove("item-bg__default");
    GET_ITEM_ELEMENT.classList.add(IS_EVEN ? "item-bg__win" : "item-bg__fail");
    GET_ITEM_ELEMENT.innerHTML = `<p class="text">${IS_EVEN ? "Success" : "Fail"}</p>`;
    let count = IS_EVEN ? winCount++ : failCount++;
    const MESSAGE = document.getElementById(IS_EVEN ? 'success' : 'fail');
    MESSAGE.innerText = IS_EVEN ? `SUCCESS: ${winCount}` : `FAIL: ${failCount}`;
    alert(IS_EVEN ? "SUCCESS" : "FAIL");
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