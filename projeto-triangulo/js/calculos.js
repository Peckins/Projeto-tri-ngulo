function calcularTriangulo() {
	var a = parseFloat(document.getElementById('lado1').value);// variável que irá conter o primeiro valor.
	var b = parseFloat(document.getElementById('lado2').value);// variável que irá conter o segundo valor.
	var c = parseFloat(document.getElementById('lado3').value);// variável que irá conter o terceiro valor.

	if (a < (b + c)) {

		if (b < (a + c)) {

			if (c < (a + b)) {

				if ((a == b) && (b == c)) {

					alert("Triângulo equilátero!");

				} else if ((a == b) || (a == c) || (b == c)) {

					alert("Triângulo isósceles!");

				} else {

					alert("Triângulo escaleno!");
				}

			} else {

				alert("Dados não correspondem a nenhum triângulo!");
			}
		} else {
			alert("Dados não correspondem a nenhum triângulo!");
		}
	} else {
		alert("Dados não correspondem a nenhum triângulo!");
	}

	document.getElementById('lado1').value = "";// deixa o campo "lado A" em branco novamente.
	document.getElementById('lado2').value = "";// deixa o campo "lado B" em branco novamente.
	document.getElementById('lado3').value = "";// deixa o campo "lado C" em branco novamente.
}