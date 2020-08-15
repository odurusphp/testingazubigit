
		const monthSales = document.querySelector(".monthSales");
			const months = [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			];
			let pos = 0;
			for (let i = 0; i < 12; i++) {
				const bar = document.createElement("div");
				const month = document.createElement("div");
				const lg = Math.random() * 420;
				bar.className = "bar";
				bar.innerHTML = lg.toFixed(2);
				bar.style.height = lg + "px";
				bar.style.left = pos + "px";
				bar.style.backgroundColor = colors();

				month.innerHTML = months[i];
				month.className = "months";
				month.style.left = pos + "px";
				month.style.backgroundColor = "#CCC";
				pos += 45;
				monthSales.appendChild(bar);
				monthSales.appendChild(month);
			}

			function colors() {
				return (
					"#" +
					Math.floor(Math.random() * 255).toString(16) +
					"" +
					Math.floor(Math.random() * 255).toString(16) +
					"" +
					Math.floor(Math.random() * 255).toString(16)
				);
			}
			
			function refreshpage(){
				if (confirm("Would you like to refresh the page?")){
					location.reload();
				}
			}