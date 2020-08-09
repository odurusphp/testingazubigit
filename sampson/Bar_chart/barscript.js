const monthlySales = [
    { month: "Jan", amount: Math.floor (Math.random() * 10000) + 1000 },
    { month: "Feb", amount: Math.floor (Math.random() * 5000) + 2000 },
    { month: "Mar", amount: Math.floor (Math.random() * 8000) + 1000 },
    { month: "Apr", amount: Math.floor (Math.random() * 6000) + 1000 },
    { month: "May", amount: Math.floor (Math.random() * 12000) + 2000 },
    { month: "Jun", amount: Math.floor (Math.random() * 7000) + 1000 },
    { month: "Jul", amount: Math.floor (Math.random() * 9000) + 1000 },
    { month: "Aug", amount: Math.floor (Math.random() * 11000) +2000 },
    { month: "Sept", amount: Math.floor (Math.random() * 8500) + 1000 },
    { month: "Oct", amount: Math.floor (Math.random() * 6900) + 1000 },
    { month: "Nov", amount: Math.floor (Math.random() * 10000) + 2000 },
    { month: "Dec", amount: Math.floor (Math.random() * 12000) + 2500 }
    // add other objects for each month
];

function chartBar() {
    const DIV_ITEMS = document.querySelector(".items");
    const DIV_ITEMS_BOTTOM = document.querySelector(".items-bottom")
    var sum = monthlySales.reduce((tot, values) => {
        return (tot+values.amount)
    }, 0);
    var percentage = monthlySales.map((num)=>{
        return ((num.amount/sum)*100).toFixed(0)
    })
    var salesPerMonthList = monthlySales.map((amt)=>{
        return amt.amount   })
    var monthlList = monthlySales.map((months)=>{
        return months.month   })
    for ( let i = 0; i<monthlySales.length; i++){
        //creating  div and paragrapgh element inside the HTML Document
        const DIV = document.createElement("div");
        const DIV1 = document.createElement("div");
        const Div_Paragraph = document.createElement("p");
        const Div_Paragraph1 = document.createElement("p");
        
        //inserting another div and paragrapgh element inside the HTML Document
        var monthpercentile = document.createTextNode("GHc "+ salesPerMonthList[i] +" , " + percentage[i] + "%")
        var monthText = document.createTextNode(monthlList[i])
        DIV.setAttribute("class" , "item")
        DIV.setAttribute("style", "height: "+ (percentage[i]*2) + "%")
        DIV1.setAttribute("class" , "item")
        DIV_ITEMS.appendChild(DIV)
        DIV_ITEMS_BOTTOM.appendChild(DIV1)
        Div_Paragraph.appendChild(monthpercentile)
        Div_Paragraph1.appendChild(monthText)
        DIV.appendChild(Div_Paragraph)
        DIV1.appendChild(Div_Paragraph1)      

    }
}

chartBar();


