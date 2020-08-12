/*
Set up data
Calculate data needed to create bar chart
Build bar chart
*/

//Build an array of twelve random values
let monthlySales = Array.from({ length: 12 }, (sale) => Math.floor(Math.random() * Math.floor(9999)));
//Find the sum of all salesused to calcutate the percentange 
let sum = monthlySales.reduce((a, b) => a + b);
//Get Value of the month with the highest sale
let largestSales = monthlySales.reduce(function (a, b) { return Math.max(a, b); });
//Used to for labeling the data and divs.
let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//Bar chart colors
let colors = ['#e6194b', '#3cb44b', '#000075', '#808080', '#9a6324', '#fffac8', '#f58231', '#911eb4', '#000075', '#000000', '#46f0f0', '#f032e6'];
//Calculate data needed to create bar chart
let salesByMonth = monthlySales.map((elem, index) => {
    let column = {};
    column.name = monthNames[index];
    column.sales = elem;
    column.valueRelativeToMax = (elem / largestSales) * 100;
    column.percentage = (elem / sum) * 100;
    column.backgroundColor = colors[index];
    column.bar = document.createElement("div");
    column.percentageOnBar = document.createElement("div");
    column.label = document.createElement("div");
    return column;
});
let orientation = "Vertical";
//Get the bar chart div so we can add elements to it
let main = document.querySelector("#bar_chart");

main.style.position = "relative";



let buildBarChart = (orientation = "Vertical") => {
    salesByMonth.forEach((element, index) => {
        // //build bar chart
        if(document.querySelector("#percentage").checked==true){
            setScale="Percentage"
        }
        if(document.querySelector("#scaledToMaxValue").checked==true){
            setScale="valueRelativeToMax";
        }

        assignBarLabelAndPercentageToParent(element.bar, element.percentageOnBar, element.label);
        stylePercentageOnBar(element.percentageOnBar, element.percentage);
        assignIdsToBarAndLabel(element.bar, element.label, element.name);

        element.bar.style.gridArea = element.name;
        element.label.style.gridArea = element.name + "_label";
        element.label.style.textAlign = "center";
        element.label.innerHTML = "<b>" + element.name + "</b>" + "<br>" + element.sales + "\tsales";

        element.bar.style.position = "absolute";
        element.bar.style.bottom = 0;
        element.bar.style.backgroundColor = element.backgroundColor;

        let scale;

        if (setScale == "Percentage") {
            scale = element.percentage;
        }
        if (setScale == "valueRelativeToMax") {
            scale = element.valueRelativeToMax;
        }

        if (orientation == "Vertical") {
            element.bar.style.height = `${scale}%`;
            element.bar.style.width = "100%";
        }
        if (orientation == "Horizontal") {
            element.bar.style.height = "100%";
            element.bar.style.width = `${scale}%`;
        }


    });

}
//see if button has been clicked and draw appropriate chart
document.querySelector("#horizontal_button").addEventListener("click", () => {
    removeBarChart();
    createBarChartDiv();
    document.querySelector("#style_type").href = "style/horizontal_bar_chart.css";
    buildBarChart("Horizontal");
    document.querySelector("#horizontal_button").style.visibility = "hidden";
    document.querySelector("#vertical_button").style.visibility = "visible";
    orientation = "Horizontal";

}, false);
//see if button has been clicked and draw appropriate chart

document.querySelector("#vertical_button").addEventListener("click", () => {
    removeBarChart();
    createBarChartDiv();
    document.querySelector("#style_type").href = "style/vertical_bar_chart.css";
    buildBarChart("Vertical");
    document.querySelector("#horizontal_button").style.visibility = "visible";
    document.querySelector("#vertical_button").style.visibility = "hidden";
    orientation = "Vertical";

}, false);

document.querySelector("#percentage").addEventListener("click", () => {
if(document.querySelector("#percentage").checked==true){
    buildBarChart(orientation);
} 
}, false);

document.querySelector("#scaledToMaxValue").addEventListener("click", () => {
  if(document.querySelector("#scaledToMaxValue").checked==true){
    buildBarChart(orientation);
  }
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
let assignBarLabelAndPercentageToParent = (bar, percentageOnBar, label, parent = document.querySelector("#bar_chart")) => {

    parent.appendChild(bar);
    parent.appendChild(label);
    bar.appendChild(percentageOnBar);

}
let stylePercentageOnBar = (percentageOnBar, percentage) => {

    percentageOnBar.style.textAlign = "center";
    percentageOnBar.style.color = "white";
    percentageOnBar.style.textShadow = "3px 3px 4px black";
    percentageOnBar.innerHTML = parseInt(percentage) + "%";

}
let assignIdsToBarAndLabel = (bar, label, name) => {
    bar.id = name;
    label.id = name + "_label";

};
//Display vertical bar chart by default
buildBarChart();
