butt.onclick = function() {
	let inputs = table.getElementsByTagName('input');
	for (let input of inputs) {
		Console.log( input.value + ': ' + input.checked );
	  }

};