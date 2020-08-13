const container = document.querySelector("#container");
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let position = 250;

for (let i = 0;i < 12;i++){
    const bar = document.createElement("div");
    const month = document.createElement("div");
    const sales = Math.random() * 2000;
    bar.className = "bar";
    bar.innerHTML = sales.toFixed(0);
    bar.style.height = (sales/5) + "px";
    bar.style.left = position + "px";


    month.innerHTML = months[i];
    month.className = "months";
    month.style.left = position + "px";
    position += 80;
    container.appendChild(bar);
    container.appendChild(month);

}