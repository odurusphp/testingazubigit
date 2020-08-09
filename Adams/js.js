	var canvas=document.querySelector('canvas');
	canvas.width=1000;
	canvas.height=500;

	var xGrid=10;
	var yGrid=10;
	var cellSize=10;
	
	var ctx=canvas.getContext('2d');
	
	var data={
		Jan:"";
		Feb:"";
		Mar:"";
		Apr:"";
		May:"";
		Jun:"";
		Jul:"";
		Aug:"";
		Sep:"";
		Oct:"";
		Nov:"";
		Dec:"";
		
	}
	
	const entries=Object.entries(data);
	
	function drawGrids()
	{
		ctx.beginPath();
		
		while(xGrid<canvas.height)
		{
			ctx.moveTo(0,xGrid);
			ctx.lineTo(canvas.width,xGrid);
			xGrid+=cellSize;
		}
		
		while(yGrid<canvas.width)
		{
			ctx.moveTo(yGrid,0);
			ctx.lineTo(yGrid,canvas.height);
			yGrid+=cellSize;
		}
		
		ctx.strokeStyle="gray";
		ctx.stroke();
	}
	
	
	function blocks(count)
	{
		return count*10;
	}
	function drawAxis()
	{
		var yPlot=40;
		var pop=0;
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.moveTo(blocks(5),blocks(5));
		ctx.lineTo(blocks(5),blocks(40));
		ctx.lineTo(blocks(80),blocks(40));
		
		ctx.moveTo(blocks(5),blocks(40));
		
		for(var i=1;i<=10;i++)
		{
				ctx.strokeText(pop,blocks(2),blocks(yPLot));
				yPlot-=5;
				pop+=500;
		}
		
		ctx.stroke();
	}
	
	function drawChart()
	{
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.moveTo(blocks(5),blocks(40));
		
		var xPlot=10;
		
		for(const [country,population] of entries)
		{
			var populationInBlocks=population/100;
			ctx.strokeText(country,blocks(xPlot,blocks(40-populationInBlocks-2));
			ctx.lineTo(blocks(xPlot),blocks(40-populationInBlocks));
			ctx.arc(blocks(xPlot),blocks(40-populationInBlocks),2,0,Math.PI*2,true);
			xPlot+=5;
		}
		
		ctx.stroke();
	}
	
	drawGrids();
	drawAxis();
	drawChart();