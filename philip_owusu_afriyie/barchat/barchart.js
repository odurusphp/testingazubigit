document.addEventListener("DOMContentLoaded", () => {

  /*
  Creating variables to hold information on:
    1. the bar graphs, 
    2. the amount generated on each month
    3. the percentage caculated from the amount generated
    4. the 12 months of the year.
    */

   const bar_graph = document.querySelector(".bar-graph");
   let created_bar_graphs = [];
   let amount = [];
   let percentages = [];
   let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
    /*
    For each of the 12 months:
    1. a div is created.
    2. an Id is given to the div.
    3. the div is added to the 'bar-graph' class.
    4. the div is added to the 'created_bar_graphs' array.
    */
   
    create_bars = () => {
      for (i = 0; i < 12; i++) {
        const bar = document.createElement("div");
        bar.setAttribute("id", i);
        bar.classList.add("bar-graph");
        bar_graph.appendChild(bar);
        created_bar_graphs.push(bar);
        
        /*
        For each of the 12 divs created:
        1. a random number is generated between 10000 and 50000.
        2. the random number is added to the 'amount' array.
        3. a percentage value is calculated for each amount in the array.
        4. the percentage is added to the 'percentages array.
        */
       
        while (percentages.length < 12) {
          let random_number = Math.floor(Math.random() * (50000 - 10000 + 1) + 10000);
          amount.push(random_number);
          let percent = Math.floor((random_number / 50000) * 100);
          percentages.push(percent);
        }
      }
  
      /*
      For each of the bars(divs) created:
      1. a height of 100px is given.
      2. the width of the div is determined by the calculated percentage.
      3. 0 is added to each percentage to give a better visual representatio of the bar.
      4. a color is assigned to the div.
      5. the month, amount and percentage are placed within the div in text.
      */
     
      created_bar_graphs.forEach((element,i) => {
        element.style.height = "100px";
        element.style.width = percentages[i]+"0px";
        element.style.backgroundColor = "#e7305b";
        document.getElementById(created_bar_graphs[i].id).innerHTML = months[i] + " Amount: ‎GH₵" + new Intl.NumberFormat().format(amount[i])+ ", "
        + "Percentage: " +percentages[i] + "%";
      });
    };
    
    create_bars();
  });
  
