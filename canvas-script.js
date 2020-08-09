



window.onload = function() {

  var min = 1;
  var max = 700;

  // monthlySales Chart Data
  var monthlySales  = [
    {label: 'Jan', value: getRandomInt(min, max)},
    {label: 'Feb',   value: getRandomInt(min, max)},
    {label: 'March', value: getRandomInt(min, max)},
    {label: 'April', value: getRandomInt(min, max)},
    {label: 'May', value: getRandomInt(min, max)},
    {label: 'June', value: getRandomInt(min, max)},
    {label: 'July', value: getRandomInt(min, max)},
    {label: 'Aug', value: getRandomInt(min, max)},
    {label: 'Sept', value: getRandomInt(min, max)},
    {label: 'Oct', value: getRandomInt(min, max)},
    {label: 'Nov', value: getRandomInt(min, max)},
    {label: 'Dec', value: getRandomInt(min, max)},
  ];

  // Chart Specifications
  var targetId = 'chart';
  var canvasWidth = 600;
  var canvasHeight = 450;

  // Create Chart
  var chart = new BarChart(targetId, canvasWidth, canvasHeight, monthlySales);

};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * 99); //The maximum is exclusive and the minimum is inclusive
}
