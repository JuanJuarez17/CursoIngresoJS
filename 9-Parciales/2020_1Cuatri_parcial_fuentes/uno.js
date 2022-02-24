
function mostrar() {
	var tipoProducto;
	var precioProducto;
	var unidadesProducto;
	var marcaProducto;
	var fabricanteProducto;

	var contador;

	var flagAlcoholPrecioPrimero;
	var precioMinimoAlcohol;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato

	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;

	var tipoMaximoProducto;
	var unidadMaximaProducto;
	var contadorMaximoProducto;

	var promMaximoProducto;

	contador = 0;
	flagAlcoholPrecioPrimero = true;
	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;

	while (contador < 5) {
		contador = contador + 1;

		tipoProducto = prompt("Ingrese el tipo de producto Nº" + contador + ". (barbijo, jabon o alcohol).");

		while (!(tipoProducto == "barbijo" || tipoProducto == "jabon" || tipoProducto == "alcohol")) { //(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
			tipoProducto = prompt("El producto ingresado es incorrecto. Ingrese el tipo de producto Nº" + contador + ".");
		}

		precioProducto = prompt("Ingrese el precio del producto Nº " + contador + ".");
		precioProducto = parseInt(precioProducto);

		while (isNaN(precioProducto) || precioProducto <= 100 || precioProducto >= 300) {
			precioProducto = prompt("El precio ingresado es incorrecto. Ingrese el precio del producto Nº " + contador + ".");
			precioProducto = parseInt(precioProducto);
		}

		unidadesProducto = prompt("Ingrese las unidades del producto Nº " + contador + ".");
		unidadesProducto = parseInt(unidadesProducto);

		while (unidadesProducto < 1 || unidadesProducto >= 1000) { //No se puede tomar 0 como unidad
			unidadesProducto = prompt("Las unidades ingresadas son incorrectas. Ingrese las unidades del producto Nº " + contador + ".");
			unidadesProducto = parseInt(unidadesProducto);
		}

		marcaProducto = prompt("Ingrese la marca del producto Nº " + contador + "."); // Ver validacion distinto vacio.

		fabricanteProducto = prompt("Ingrese el fabricante del producto Nº " + contador + ".");

		switch (tipoProducto) {
			case "alcohol":
				if (flagAlcoholPrecioPrimero == true) {
					precioMinimoAlcohol = precioProducto;
					cantidadAlcoholBarato = unidadesProducto;
					fabricanteAlcoholBarato = fabricanteProducto;
					flagAlcoholPrecioPrimero = false;
				}
				else {
					if (precioProducto < precioMinimoAlcohol) {
						precioMinimoAlcohol = precioProducto;
						cantidadAlcoholBarato = unidadesProducto;
						fabricanteAlcoholBarato = fabricanteProducto;
					}
				}
				contadorAlcohol = contadorAlcohol + 1;
				acumuladorAlcohol = acumuladorAlcohol + unidadesProducto;
				break;
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				acumuladorBarbijo = acumuladorBarbijo + unidadesProducto;
				break;
			case "jabon":
				contadorJabon = contadorJabon + 1;
				acumuladorJabon = acumuladorJabon + unidadesProducto;
				break;
		} // Fin del switch
	} // Fin del while
	if (acumuladorBarbijo > acumuladorJabon) {
		if (acumuladorBarbijo > acumuladorAlcohol) {
			unidadMaximaProducto = acumuladorBarbijo;
			contadorMaximoProducto = contadorBarbijo;
			tipoMaximoProducto = "Barbijo";
		}
		else {
			unidadMaximaProducto = acumuladorAlcohol;
			contadorMaximoProducto = contadorAlcohol;
			tipoMaximoProducto = "Alcohol";
		}
	}
	if (acumuladorJabon > acumuladorAlcohol) {
		if (acumuladorJabon > acumuladorBarbijo) {
			unidadMaximaProducto = acumuladorJabon;
			contadorMaximoProducto = contadorJabon;
			tipoMaximoProducto = "Jabon";
		}
		else {
			unidadMaximaProducto = acumuladorBarbijo;
			contadorMaximoProducto = contadorBarbijo;
			tipoMaximoProducto = "Barbijo";
		}
	}
	if (acumuladorAlcohol > acumuladorBarbijo) {
		if (acumuladorAlcohol > acumuladorJabon) {
			unidadMaximaProducto = acumuladorAlcohol;
			contadorMaximoProducto = contadorAlcohol;
			tipoMaximoProducto = "Alcohol";
		}
		else {
			unidadMaximaProducto = acumuladorJabon;
			contadorMaximoProducto = contadorJabon;
			tipoMaximoProducto = "Jabon";
		}
	}
	promMaximoProducto = unidadMaximaProducto / contadorMaximoProducto;
	alert("La cantidad del alcohol mas barato es " + cantidadAlcoholBarato + " unidades, y el fabricante es " + fabricanteAlcoholBarato + ".");
	alert("El promedio por compra de unidades maximas resulta: $" + promMaximoProducto + ", correspondiente al producto: " + tipoMaximoProducto + ".");
	alert("Las unidades de jabon que hay en total son: " + acumuladorJabon + ".");
}
// Si dice validar usar si o si while
//contadorAlcohol++; ---> Al valor inicial del contador le suma 1.
//acumuladorAlcohol += unidadesProducto; ---> Al valor inicial del acumulador le suma el valor de la variable.