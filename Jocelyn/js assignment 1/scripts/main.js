/*
Set up data
Calculate data needed to create bar chart
Build bar chart
*/

//Build an array of twelve random values
let monthlySales = Array.from({ length: 12 }, (sale) => Math.floor(Math.random() * Math.floor(9999)));
//Find the sum of all salesused to calcutate the percentange 
let sum = monthlySales.reduce((a, b) => a + b);
//Used to build colum
let year = 2020;
//Used to for labeling the data and divs.
let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//Bar chart colors
let colors = ['#e6194b', '#3cb44b', '#000075', '#808080', '#9a6324', '#fffac8', '#f58231', '#911eb4', '#000075', '#000000', '#46f0f0', '#f032e6'];
//Get the bar chart div so we can add elements to it
let main = document.querySelector("#bar_chart");
main.style.position = "relative";



let buildVerticalBarChart = () => {
    monthlySales.forEach((element, index) => {
        //Calculate data needed to create bar chart
        let percentile = (element / sum) * 100;
        let currentMonth = new Date(`${index + 1}/1/${year}`);
        currentMonthName = currentMonth.toLocaleString('default', { month: 'short' });
        //build bar chart
        let newDiv = document.createElement("div");
        let percentageOnBar = document.createElement("div");
        let newDivLabel = document.createElement("div");
        main.appendChild(newDiv);
        main.appendChild(newDivLabel);
        newDiv.appendChild(percentageOnBar);

        percentageOnBar.style.textAlign = "center";
        percentageOnBar.style.color = "white";
        percentageOnBar.style.textShadow = "3px 3px 4px black";
        percentageOnBar.innerHTML = parseInt(percentile) + "%";

        newDiv.id = currentMonthName;
        newDivLabel.id = currentMonthName + "_label";

        newDiv.style.gridArea = currentMonthName;
        newDivLabel.style.gridArea = currentMonthName + "_label";
        newDivLabel.style.textAlign = "center";
        newDivLabel.innerHTML = "<b>" + currentMonthName + "</b>" + "<br>" + element + "\tsales";

        newDiv.style.position = "absolute";
        newDiv.style.bottom = 0;
        newDiv.style.backgroundColor = colors[index];
        newDiv.style.width = "100%";
        newDiv.style.height = `${percentile}%`;

    });

}
let buildHorizontalBarChart = () => {
    monthlySales.forEach((element, index) => {
        //Calculate data needed to create bar chart
        let percentile = (element / sum) * 100;
        let currentMonth = new Date(`${index + 1}/1/${year}`);
        currentMonthName = currentMonth.toLocaleString('default', { month: 'short' });
        //build bar chart
        let newDiv = document.createElement("div");
        let percentageOnBar = document.createElement("div");
        let newDivLabel = document.createElement("div");
        main.appendChild(newDiv);
        main.appendChild(newDivLabel);
        newDiv.appendChild(percentageOnBar);
        percentageOnBar.style.textAlign = "center";
        percentageOnBar.style.color = "white";
        percentageOnBar.style.textShadow = "3px 3px 4px black";
        percentageOnBar.innerHTML = parseInt(percentile) + "%";
        newDiv.id = currentMonthName;
        newDivLabel.id = currentMonthName + "_label";
        newDiv.style.gridArea = currentMonthName;
        newDivLabel.style.gridArea = currentMonthName + "_label";
        newDivLabel.style.textAlign = "center";
        newDivLabel.innerHTML = "<b>" + currentMonthName + "</b>" + "<br>" + element + "\tsales";

        newDiv.style.position = "absolute";
        newDiv.style.bottom = 0;
        newDiv.style.backgroundColor = colors[index];
        newDiv.style.width = `${percentile}%`;
        newDiv.style.height = "100%";

    });
}
//see if button has been clicked and draw appropriate chart
document.querySelector("#horizontal_button").addEventListener("click", () => {
    removeBarChart();
    createBarChartDiv();
    document.querySelector("#style_type").href = "style/horizontal_bar_chart.css";
    buildHorizontalBarChart();

    document.querySelector("#horizontal_button").style.visibility = "hidden";
    document.querySelector("#vertical_button").style.visibility = "visible";
}, false);
//see if button has been clicked and draw appropriate chart

document.querySelector("#vertical_button").addEventListener("click", () => {
    removeBarChart();
    createBarChartDiv();
    document.querySelector("#style_type").href = "style/vertical_bar_chart.css";
    buildVerticalBarChart();
    document.querySelector("#horizontal_button").style.visibility = "visible";
    document.querySelector("#vertical_button").style.visibility = "hidden";


}, false);

let removeBarChart = () => {
    if (document.querySelector("#bar_chart")) {
        document.querySelector("#bar_chart").remove();
    }

}
let createBarChartDiv = () => {
    if (!document.querySelector("#bar_chart")) {
        main = document.createElement("div");
        document.querySelector("#container").appendChild(main);
        main.id = "bar_chart";
        main.style.position = "relative";
    }
}
//Display vertical bar chart by default
buildVerticalBarChart();

