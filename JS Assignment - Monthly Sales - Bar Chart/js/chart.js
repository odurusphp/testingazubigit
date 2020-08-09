const monthlySales = () => [
        {month: "January", amount: Math.random() * 99999},
        {month: "February", amount: Math.random() * 99999},
        {month: "March", amount: Math.random() * 99999},
        {month: "April", amount: Math.random() * 99999},
        {month: "May", amount: Math.random() * 99999},
        {month: "June", amount: Math.random() * 99999},
        {month: "July", amount: Math.random() * 99999},
        {month: "August", amount: Math.random() * 99999},
        {month: "September", amount: Math.random() * 99999},
        {month: "October", amount: Math.random() * 99999},
        {month: "November", amount: Math.random() * 99999},
        {month: "December", amount: Math.random() * 99999}
    ];
let isInit = false;

function reloadBarChart(monthlySales) {
    const GET_ITEMS = document.querySelectorAll(".items > div");
        // console.log(GET_ITEMS.length)
    for (const ITEM of GET_ITEMS) {
        // console.log(ITEM);
        const GET_MONTH = monthlySales.filter(sale => sale.month.toLowerCase() === ITEM.id);
        ITEM.querySelector('p')
        .innerHTML = `<span>&#8373; ${GET_MONTH[0].originalAmount.toFixed(2)}</span>`;
        // console.log(GET_MONTH[0].calcAmount);
        ITEM.style.height = `${GET_MONTH[0].calcAmount}%`;
    }
}

function buildBarChart() {
    const DIV_ITEMS = document.querySelector(".items");
    const TOTAL_MONTHLY_AMOUNT = monthlySales().reduce((a, b) => {
        return a + b.amount;
    }, 0);

    document.querySelector(".month-sale")
    .innerHTML = `<h3>Total Amount of Monthly Sales: GH<span>&#8373;</span> ${TOTAL_MONTHLY_AMOUNT.toFixed(2)}</h3>`;

    const CALC_MONTHLY_SALES = monthlySales().map(sale => {
        return {
            month: sale.month,
            originalAmount: sale.amount,
            calcAmount: (((sale.amount / TOTAL_MONTHLY_AMOUNT) * 100) + 25).toFixed(2)
        };

        // return {
        //     month: sale.month,
        //     originalAmount: sale.amount,
        //     calcAmount: ((sale.amount / TOTAL_MONTHLY_AMOUNT) * 100).toFixed(2)
        // };
    });

    if (isInit) {
        reloadBarChart(CALC_MONTHLY_SALES);
    } else {
        isInit = !isInit;
        CALC_MONTHLY_SALES.forEach(sale => {
            const DIV_ELEMENT = document.createElement('div');
            const PARA_ELEMENT = document.createElement('p');
            PARA_ELEMENT.innerHTML = `<span>&#8373; ${sale.originalAmount.toFixed(2)}</span>`;
            // PARA_ELEMENT.innerText = `${sale.calcAmount}%`;
            DIV_ELEMENT.setAttribute("id", `${sale.month.toLowerCase()}`);
            DIV_ELEMENT.classList.add('item');
            DIV_ELEMENT.style.height = `${sale.calcAmount}%`;
            DIV_ELEMENT.appendChild(PARA_ELEMENT);
            DIV_ITEMS.appendChild(DIV_ELEMENT);
        });
    }
}

buildBarChart();
setInterval(buildBarChart, 10000);