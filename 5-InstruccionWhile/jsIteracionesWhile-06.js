function mostrar() {
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador = 0; // Contadores y acumuladores deben estar siempre inicializados, porque sino no puedo iterar.
	acumulador = 0;

	while (contador < 5) {
		contador = contador + 1; // Con esta linea nos aseguramos que el contador de vuelta 5 veces, en la 5ta no se cumple la condicion y no se pasa por la sentencia del while.
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	/* Validacion de un numero ingresado. Si no se ingresa un numero, el while se ejecuta.

	numeroIngresado=prompt("Ingrese un numero: ");
	numeroIngresado=parseInt(numeroIngresado);

	while (isNaN(numeroIngresado))
	{
		numeroIngresado=prompt("Error! No ingreso un numero");
		numeroIngresado=parseInt(numeroIngresado);
	}
	// Tambien se puede hacer con if en vez de while
	*/
}