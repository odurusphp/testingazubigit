let monthlySales = [
    {
        month:'January',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'February',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'March',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'April',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'May',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'June',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'July',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'August',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'September',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'October',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'November',
        sale: Math.round(Math.random() * 80)
    },
    {
        month:'December',
        sale: Math.round(Math.random() * 80)
    }
]

const grid = document.getElementById("grid")

const createbars = ()=>{
   
    for (let i = 0; i < monthlySales.length; i++) {
        const bar = document.createElement("div")
        bar.classList.add("bar")
        bar.setAttribute('title',monthlySales[i].month +' ' + monthlySales[i].sale + '00.00')
        bar.setAttribute('style','--bar-value:' + monthlySales[i].sale +'%')
        bar.setAttribute('data-name', monthlySales[i].month )
        grid.appendChild(bar)
    }
       
    }

    createbars()