
	
			var col = 10;
			var row = 10;
			var dCheck = true;
			function createButtons(row,col){
				var counter = 1;
				var element = document.getElementById("buttonArea");

					for(countR = 1; countR <= row; countR++){

						for(countC = 1; countC <= col; countC++){
							var newButton = document.createElement("button");
							newButton.setAttribute("id", "btn" + counter);
							newButton.setAttribute("type", "button");

							newButton.setAttribute("class", "noclass");
							element.appendChild(newButton);
							counter++;
						}
						var breakLine = document.createElement("br");
						element.appendChild(breakLine);
					}

			}
			
			
	
			
			function resetButtons(){
				var buttons = document.getElementsByTagName("button");
				for(var i = 0; i < (buttons.length); i++){
					buttons[i].innerHTML = "";
					buttons[i].disabled = false;
					buttons[i].setAttribute("class", "noclass");
				}

			}