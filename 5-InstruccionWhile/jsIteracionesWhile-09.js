/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	banderaDelPrimero = "es el primero";
	respuesta = 'si';
	while (respuesta == "si") {

		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)) { // Validacion de dato numerico
			numeroIngresado = prompt("Error, ingrese un numero.");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (banderaDelPrimero == "es el primero") {
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
			banderaDelPrimero = "No lo es mas.";
		}
		else {
			if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado;
			}
			else {
				if (numeroIngresado > numeroMaximo) {
					numeroMaximo = numeroIngresado;
				}
			}
		}

		respuesta = prompt("desea continuar?");
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}