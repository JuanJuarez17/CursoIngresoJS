function mostrar() {
	var tipoProducto;
	var precioProducto;
	var cantUnidades;
	var marcaProducto;
	var fabricanteProducto;
	var contador;
	var flagPrimerAlcohol;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var acumuladorUnidadesJabon;
	var acumuladorUnidadesAlcohol;
	var acumuladorUnidadesBarbijo;
	var productoMayorUnidades;
	var promedioMayorUnidades;
	var contadorJabon;
	var contadorAlcohol;
	var contadorBarbijo;



	contador = 0;
	flagPrimerAlcohol = true;
	acumuladorUnidadesJabon = 0;
	acumuladorUnidadesAlcohol = 0;
	acumuladorUnidadesBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;

	while (contador < 5) {

		contador = contador + 1;

		tipoProducto = prompt("Ingrese el tipo del producto N°:" + contador + ".");
		tipoProducto = tipoProducto.toLowerCase();
		while (tipoProducto != "b" && tipoProducto != "j" && tipoProducto != "a") {
			tipoProducto = prompt("Error! Ingrese el tipo del producto N°:" + contador + ".");
			tipoProducto = tipoProducto.toLowerCase();
		}

		precioProducto = prompt("Ingrese el precio del producto N°:" + contador + ".");
		precioProducto = parseFloat(precioProducto);
		while (isNaN(precioProducto) || precioProducto <= 100 || precioProducto >= 300) {
			precioProducto = prompt("Error! Ingrese el precio del producto N°:" + contador + ".");
			precioProducto = parseFloat(precioProducto);
		}

		cantUnidades = prompt("Ingrese la cantidad del producto N°:" + contador + ".");
		cantUnidades = parseInt(cantUnidades);
		while (isNaN(cantUnidades) || cantUnidades <= 0 || cantUnidades > 1000) {
			cantUnidades = prompt("Error! Ingrese el precio del producto N°:" + contador + ".");
			cantUnidades = parseInt(cantUnidades);
		}

		marcaProducto = prompt("Ingrese la marca del producto N°:" + contador + ".");
		marcaProducto = marcaProducto.toLowerCase();
		while (marcaProducto == "") {
			marcaProducto = prompt("Error! Ingrese la marca del producto N°:" + contador + ".");
			marcaProducto = marcaProducto.toLowerCase();
		}

		fabricanteProducto = prompt("Ingrese la marca del producto N°:" + contador + ".");
		fabricanteProducto = fabricanteProducto.toLowerCase();
		while (fabricanteProducto == "") {
			fabricanteProducto = prompt("Error! Ingrese la marca del producto N°:" + contador + ".");
			fabricanteProducto = fabricanteProducto.toLowerCase();
		}

		switch (tipoProducto) {
			case "b":
				acumuladorUnidadesBarbijo = acumuladorUnidadesBarbijo + cantUnidades;
				contadorBarbijo = contadorBarbijo + 1;
				break;
			case "j":
				acumuladorUnidadesJabon = acumuladorUnidadesJabon + cantUnidades;
				contadorJabon = contadorJabon + 1;
				break;
			case "a":
				if (flagPrimerAlcohol == true || cantUnidades < cantidadAlcoholBarato) {
					cantidadAlcoholBarato = cantUnidades;
					fabricanteAlcoholBarato = fabricanteProducto;
					flagPrimerAlcohol = false;
				}
				acumuladorUnidadesAlcohol = acumuladorUnidadesAlcohol + cantUnidades;
				contadorAlcohol = contadorAlcohol + 1;
				break;
		}
	}
	if (acumuladorUnidadesBarbijo > acumuladorUnidadesJabon) {
		if (acumuladorUnidadesBarbijo > acumuladorUnidadesAlcohol) {
			productoMayorUnidades = "Barbijo";
			promedioMayorUnidades = acumuladorUnidadesBarbijo / contadorBarbijo;
		}
		else{
			productoMayorUnidades = "Alcohol";
			promedioMayorUnidades = acumuladorUnidadesAlcohol / contadorAlcohol;
		}
	}
	else{
		if(acumuladorUnidadesBarbijo < acumuladorUnidadesJabon){
			if(acumuladorUnidadesJabon > acumuladorUnidadesAlcohol){
				productoMayorUnidades = "Jabon";
				promedioMayorUnidades = acumuladorUnidadesJabon / contadorJabon;

			}
			else{
				productoMayorUnidades = "Alcohol";
				promedioMayorUnidades = acumuladorUnidadesAlcohol / contadorAlcohol;
			}
		}
	}
	alert("La cantidad de alcohol mas barato es " + cantidadAlcoholBarato + " y su fabricante es " + fabricanteAlcoholBarato + "." +
	"\nEl tipo con mas unidades resulta ser " + productoMayorUnidades + " y su promedio por compra es $" + promedioMayorUnidades +
	"\nLa cantidad de unidades total de jabon resulta " + acumuladorUnidadesJabon);
}
//No llegue a evitar undefined ni NaN