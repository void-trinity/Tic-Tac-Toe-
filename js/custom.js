var refresh = document.querySelector("#btn1");

var cells = document.querySelectorAll(".customTable");

/*function to clear all the cells*/

var player = "X";
var filled = 0;

function clearCells() {
	for (var i = cells.length - 1; i >= 0; i--) {
		cells[i].textContent = "";
	}
	player = "X";
	filled = 0;
}

function setPlayer(){
	if(player === "X"){
		player = "Y";
		return "X";
	}
	else{
		player = "X";
		return "O";
	}
}

function checkWin(marker){
	if((cells[0].textContent===cells[1].textContent) && (cells[1].textContent===cells[2].textContent) && (marker===cells[0].textContent) ||
	   (cells[3].textContent===cells[4].textContent) && (cells[4].textContent===cells[5].textContent) && (marker===cells[3].textContent) ||
	   (cells[6].textContent===cells[7].textContent) && (cells[7].textContent===cells[8].textContent) && (marker===cells[6].textContent) ||
	   (cells[0].textContent===cells[3].textContent) && (cells[3].textContent===cells[6].textContent) && (marker===cells[0].textContent) ||
	   (cells[1].textContent===cells[4].textContent) && (cells[4].textContent===cells[7].textContent) && (marker===cells[1].textContent) ||
	   (cells[2].textContent===cells[5].textContent) && (cells[5].textContent===cells[8].textContent) && (marker===cells[2].textContent) ||
	   (cells[0].textContent===cells[4].textContent) && (cells[4].textContent===cells[8].textContent) && (marker===cells[0].textContent) ||
	   (cells[2].textContent===cells[4].textContent) && (cells[4].textContent===cells[6].textContent) && (marker===cells[2].textContent)){

	   		alert("Player " + marker + " wins");
	   		clearCells();
	}
	else if (filled === 9) {
		alert("Oops! That was a draw");
		clearCells();
	}
}


function cellAssign() {
	if(this.textContent === ""){
		this.textContent = setPlayer();
		filled++;
		if(player === "X"){
			checkWin("O");
		}
		else{
			checkWin("X");
		}
	}
	else{
		alert("Box already taken");
	}
}

for (var i = cells.length - 1; i >= 0; i--) {
		cells[i].addEventListener('click',cellAssign);
}