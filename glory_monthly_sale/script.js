

anychart.onDocumentReady(function() {


    //set function for random numbers
    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }


    // set the data
    var monthlySales = {
    header: ["Month", "Sales"],
    rows: [
        ["January",randomNumber(10000,500000)],
        ["February", randomNumber(10000,500000)],
        ["March", randomNumber(10000,500000)],
        ["April", randomNumber(10000,500000)],
        ["May", randomNumber(10000,500000)],
        ["June", randomNumber(10000,500000)],
        ["July", randomNumber(10000,500000)],
        ["August", randomNumber(10000,500000)],
        ["October", randomNumber(10000,500000)],
        ["September", randomNumber(10000,500000)],
        ["November", randomNumber(10000,500000)],
        ["December", randomNumber(10000,500000)]
    ]};


    // create the chart
    var chart = anychart.column();

    // add data
    chart.data(monthlySales);

    // set the chart title
    chart.title("Monthly Sales results for 2020 ");

    // draw
    chart.container("container");
    chart.draw();
    });