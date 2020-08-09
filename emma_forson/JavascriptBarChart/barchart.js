document.addEventListener('DOMContentLoaded', () => {
    const valuesChart = document.querySelector('#in-values');
    const percentilesChart = document.querySelector('#in-percentiles');
  
    // creating the monthlySales array
    var monthlySales = [
      { month: 'January', sales: 0, percentile: 0 },
      { month: 'February', sales: 0, percentile: 0 },
      { month: 'March', sales: 0, percentile: 0 },
      { month: 'April', sales: 0, percentile: 0 },
      { month: 'May', sales: 0, percentile: 0 },
      { month: 'June', sales: 0, percentile: 0 },
      { month: 'July', sales: 0, percentile: 0 },
      { month: 'August', sales: 0, percentile: 0 },
      { month: 'September', sales: 0, percentile: 0 },
      { month: 'October', sales: 0, percentile: 0 },
      { month: 'November', sales: 0, percentile: 0 },
      { month: 'December', sales: 0, percentile: 0 },
    ];
  
    //Generating random sales values between 100 and 500 for each month
    monthlySales.forEach((element) => {
      element.sales = Math.floor(Math.random() * (300 - 100) + 100);
    });
    //Evaluating the total sum of sales in the year
    var totalSales = monthlySales.reduce((x, element) => x + element.sales, 0);
    //Generating the percentile sales value for each month
    monthlySales.map((element) => {
      element.percentile = ((element.sales / totalSales) * 100).toFixed(2);
    });
  
    //Create bar chart using sales values
    function displayBarChartValues() {
      //Displaying the individual sales bars for each month
      monthlySales.forEach((element) => {
        const valueBar = document.createElement('div');
        valueBar.setAttribute('id', element.month);
        valueBar.classList.add('value-bars');
        valueBar.style.height = '' + element.sales + 'px';
        const month = document.createElement('div');
  
        month.style.transform = 'rotate(' + 270 + 'deg)';
        valuesChart.appendChild(valueBar);
  
        valueBar.prepend(month);
        month.innerHTML =
          ' ' +
          element.month +
          ': ' +
          '<strong>' +
          element.sales +
          'GHS' +
          '</strong>';
      });
      const caption = document.createElement('p');
      caption.setAttribute('id', 'value-cap');
      caption.innerHTML = '1. Displayed in Values';
  
      valuesChart.before(caption);
    }
    displayBarChartValues();
  
    //Create bar chart using percentile values
    function displayBarChartPercentiles() {
      //Displaying the individual sales bars for each month
      monthlySales.forEach((element) => {
        const valueBar = document.createElement('div');
        valueBar.setAttribute('id', element.month);
        valueBar.classList.add('percentile-bars');
        valueBar.style.height = '' + element.percentile * 7 + '%';
        const month = document.createElement('div');
  
        month.style.transform = 'rotate(' + 310 + 'deg)';
        percentilesChart.appendChild(valueBar);
  
        valueBar.appendChild(month);
        month.innerHTML =
          ' ' +
          element.month +
          ': ' +
          '<strong>' +
          element.percentile +
          '%' +
          '</strong>';
      });
      const caption = document.createElement('p');
      caption.setAttribute('id', 'percentile-cap');
      caption.innerHTML = '2. Displayed in Percentiles';
  
      percentilesChart.before(caption);
    }
    displayBarChartPercentiles();
  });