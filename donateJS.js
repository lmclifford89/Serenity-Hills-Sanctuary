var button5 = document.getElementById("btn5");
var button10 = document.getElementById("btn10");
var button20 = document.getElementById("btn20");
var button40 = document.getElementById("btn40");

var inputText = document.getElementById("form-amount");
var inputTextMQ = document.getElementById("form-amountMQ")

var amountText = document.getElementById("amount");

button5.onclick = function () {
amountText.innerHTML = "$5.00";
}


button10.onclick = function () {
amountText.innerHTML = "$10.00";
}

button20.onclick = function () {
amountText.innerHTML = "$20.00";
}

button40.onclick = function () {
amountText.innerHTML = "$40.00";
}



inputText.onkeydown = function () { 
	var inputValue = document.getElementById("form-amount").value;
	 var dot = new RegExp(/[.]/);
	 if(dot.test(inputValue)){
	amountText.innerHTML = "$" + inputValue;
	}else{
	amountText.innerHTML = "$" + inputValue + ".00";
}

}


inputText.onkeyup = function () {
	var inputValue = document.getElementById("form-amount").value;
	 var dot = new RegExp(/[.]/);
	 if(dot.test(inputValue)){
	amountText.innerHTML = "$" + inputValue;
	}else{
	amountText.innerHTML = "$" + inputValue + ".00";
}

}

inputText.onclick = function () {
		var inputValue = document.getElementById("form-amount").value;
	 var dot = new RegExp(/[.]/);
	 if(dot.test(inputValue)){
	amountText.innerHTML = "$" + inputValue;
	}else{
	amountText.innerHTML = "$" + inputValue + ".00";
}
}




// media query----------


inputTextMQ.onkeyup = function () {
	var inputValue = document.getElementById("form-amountMQ").value;
	 var dot = new RegExp(/[.]/);
	 if(dot.test(inputValue)){
	amountText.innerHTML = "$" + inputValue;
	}else{
	amountText.innerHTML = "$" + inputValue + ".00";
}

}

inputTextMQ.keydown = function () {
		var inputValue = document.getElementById("form-amountMQ").value;
	 var dot = new RegExp(/[.]/);
	 if(dot.test(inputValue)){
	amountText.innerHTML = "$" + inputValue;
	}else{
	amountText.innerHTML = "$" + inputValue + ".00";
}
}

inputTextMQ.onclick = function () {
		var inputValue = document.getElementById("form-amountMQ").value;
	 var dot = new RegExp(/[.]/);
	 if(dot.test(inputValue)){
	amountText.innerHTML = "$" + inputValue;
	}else{
	amountText.innerHTML = "$" + inputValue + ".00";
}
}