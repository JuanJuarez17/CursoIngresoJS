
function mostrar() {
	var tipoProducto;
	var precioProducto;
	var precioMinimo;
	var precioMaximo;
	var unidadesProducto;
	var unidadesMinimo;
	var unidadesMaximo;
	var promCompraUnMax;
	var marcaProducto;
	var fabricanteProducto;
	var contador;
	var flagPrecioPrimero;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var flagUnidadesPrimero;

	contador = 0;
	flagPrecioPrimero = "Es el primero";
	flagUnidadesPrimero = "Es el primero";

	while (contador < 3) {
		contador = contador + 1;

		tipoProducto = prompt("Ingrese el tipo de producto Nº" + contador + ".");

		while (!(tipoProducto == "barbijo" || tipoProducto == "jabon" || tipoProducto == "alcohol")) { //(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
			tipoProducto = prompt("El producto ingresado es incorrecto. Ingrese el tipo de producto Nº" + contador + ".");
		}

		precioProducto = prompt("Ingrese el precio del producto Nº " + contador + ".");
		precioProducto = parseInt(precioProducto);

		while (isNaN(precioProducto) || precioProducto <= 100 || precioProducto >= 300) {
			precioProducto = prompt("El precio ingresado es incorrecto. Ingrese el precio del producto Nº " + contador + ".");
			precioProducto = parseInt(precioProducto);
		}

		if (flagPrecioPrimero == "Es el primero") {
			precioMinimo = precioProducto;
			precioMaximo = precioProducto;
			flagPrecioPrimero = "No es el primero.";
		}
		else {
			if (precioProducto < precioMinimo) {
				precioMinimo = precioProducto;
			}
			else {
				if (precioProducto > precioMaximo) { // No hace falta el maximo
					precioMaximo = precioProducto;
				}
			}
		}

		unidadesProducto = prompt("Ingrese las unidades del producto Nº " + contador + ".");
		unidadesProducto = parseInt(unidadesProducto);

		while (unidadesProducto < 1 || precioProducto >= 1000) { //No se puede tomar 0 como unidad
			unidadesProducto = prompt("Las unidades ingresadas son incorrectas. Ingrese las unidades del producto Nº " + contador + ".");
			unidadesProducto = parseInt(unidadesProducto);
		}

		if (flagUnidadesPrimero == "Es el primero") {
			unidadesMinimo = unidadesProducto;
			unidadesMaximo = unidadesProducto;
			flagUnidadesPrimero = "No es el primero.";
		}
		else {
			if (unidadesProducto < unidadesMinimo) {
				unidadesMinimo = unidadesProducto;
			}
			else {
				if (unidadesProducto > unidadesMaximo) {
					unidadesMaximo = unidadesProducto;
				}
			}
		}

		marcaProducto = prompt("Ingrese la marca del producto Nº " + contador + "."); // Ver validacion distinto vacio.

		fabricanteProducto = prompt("Ingrese el fabricante del producto Nº " + contador + ".");

		if (tipoProducto == "alcohol" && precioProducto <= precioMinimo) {
			cantidadAlcoholBarato = unidadesProducto;
			fabricanteAlcoholBarato = fabricanteProducto;
		}

		if (unidadesProducto <= unidadesMaximo)
		{
			promCompraUnMax=unidadesProducto/precioProducto;
			promCompraUnMax=Math.round(promCompraUnMax).toFixed(2);
		}
	}

	alert("La cantidad del alcohol mas barato es " + cantidadAlcoholBarato + " unidades, y el fabricante es " + fabricanteAlcoholBarato + ".");
	alert("El promedio por compra de unidades maximas resulta: $" + promCompraUnMax + ".");
}

// Si dice validar usar si o si while