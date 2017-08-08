/**
 * 
 */
init();

function init(){
	var balance = 1000;
}

function verify(){
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if(user == "admin" && pass=="admin"){
		console.log("login successful");
		window.location.href = "main.html";
	}
	else{
		console.log("error");
	}
}

function withdraw(){
	amount = document.getElementById("withdraw").value;
	balance = document.getElementById("balance").value;
	if(balance-amount > 0){
		document.getElementById("balance").value = balance-amount;
	}
	else{
		console.log("Insufficient funds");
	}
}


function deposit(){
	amount = document.getElementById("deposit").value;
	balance = document.getElementById("balance").value;
	if(amount != 0){
		total = parseInt(balance) + parseInt(amount);
		document.getElementById("balance").value = total;
	}
	else{
		console.log("You have nothing to add.");
	}
}



