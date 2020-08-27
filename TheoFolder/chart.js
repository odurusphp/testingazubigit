var rand = []
sum = 0;

//This funtion generates random numbers
function getRand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//This code calls the function above and sets the limit of the random numbers between 0 and 2000
//It then pushes the random numbers into an array called rand above
getRand(0, 2000);
for (let i = 0; i < 12; i++) {
    let sale = getRand(0, 2000);
    rand.push(sale);
    sum += sale;
}

const CHART = document.querySelector(".chart");
const MONTHS = document.querySelectorAll(".month");
const BARS = document.querySelectorAll(".bar");
for (let i = 0; i < 12; i++) {
    BARS[i].style.height = ((rand[i] / sum) * 2000) + "px";
    BARS[i].innerHTML = rand[i].toString();
}