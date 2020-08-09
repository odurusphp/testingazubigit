var monthlySales = {
	
	rows: [
			["January", Math.floor(Math.random() * (1000 - 500)) + 500],
			["February", Math.floor(Math.random() * (1000 - 500)) + 500],
			["March", Math.floor(Math.random() * (1000 - 500)) + 500],
			["April", Math.floor(Math.random() * (1000 - 500)) + 500],
			["May", Math.floor(Math.random() * (1000 - 500)) + 500],
			["June", Math.floor(Math.random() * (1000 - 500)) + 500],
			["July", Math.floor(Math.random() * (1000 - 500)) + 500],
			["August", Math.floor(Math.random() * (1000 - 500)) + 500],
			["September", Math.floor(Math.random() * (1000 - 500)) + 500],
			["October", Math.floor(Math.random() * (1000 - 500)) + 500],
			["November", Math.floor(Math.random() * (1000 - 500)) + 500],
			["December", Math.floor(Math.random() * (1000 - 500)) + 500]

	]
}
document.getElementById("jan").innerHTML =  monthlySales.rows[0];
document.getElementById("feb").innerHTML =  monthlySales.rows[1];
document.getElementById("mar").innerHTML =  monthlySales.rows[2];
document.getElementById("apr").innerHTML =  monthlySales.rows[3];
document.getElementById("may").innerHTML =  monthlySales.rows[4];
document.getElementById("jun").innerHTML =  monthlySales.rows[5];
document.getElementById("jul").innerHTML =  monthlySales.rows[6];
document.getElementById("aug").innerHTML =  monthlySales.rows[7];
document.getElementById("sep").innerHTML =  monthlySales.rows[8];
document.getElementById("oct").innerHTML =  monthlySales.rows[9];
document.getElementById("nov").innerHTML =  monthlySales.rows[10];
document.getElementById("dec").innerHTML =  monthlySales.rows[11];