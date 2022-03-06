function mostrar() {
  var producto;
  var cantidadBolsas;
  var precioBolsa;
  var respuesta;
  var descuento;
  var totalAPagar;
  var acumuladorBolsas;
  var acumuladorAPagarCemento;
  var acumuladorAPagarArena;
  var acumuladorAPagarCal;
  var totalAPagarNeto;
  var acumuladorBolsasCemento;
  var acumuladorBolsasArena;
  var acumuladorBolsasCal;
  var productoMayorCantBolsas;
  var flagPrecioProducto;
  var mayorPrecioProducto;
  var productoMasCaro;

  respuesta = "si";
  acumuladorBolsas = 0;
  acumuladorAPagarCemento = 0;
  acumuladorAPagarArena = 0;
  acumuladorAPagarCal = 0;
  acumuladorBolsasCemento = 0;
  acumuladorBolsasArena = 0;
  acumuladorBolsasCal = 0;
  flagPrecioProducto = true;

  while (respuesta == "si"){

    producto = prompt("Ingrese el tipo del producto: ");
		producto = producto.toLowerCase();
		while (producto != "ar" && producto != "ca" && producto != "cm") {
			producto = prompt("Error! Ingrese el tipo del producto: ");
			producto = producto.toLowerCase();
		}

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas del producto: ");
		cantidadBolsas = parseInt(cantidadBolsas);
		while (isNaN(cantidadBolsas) || cantidadBolsas <= 0) {
			cantidadBolsas = prompt("Error! Ingrese la cantidad de bolsas del producto: ");
			cantidadBolsas = parseInt(cantidadBolsas);
		}

    precioBolsa = prompt("Ingrese el precio por bolsas del producto: ");
		precioBolsa = parseFloat(precioBolsa);
		while (isNaN(precioBolsa) || precioBolsa <= 0) {
			precioBolsa = prompt("Error! Ingrese el precio por bolsas del producto: ");
			precioBolsa = parseFloat(precioBolsa);
		}

    acumuladorBolsas = acumuladorBolsas + cantidadBolsas;

    switch (producto) {
      case "cm":
        acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadBolsas;
        acumuladorAPagarCemento = acumuladorAPagarCemento + (cantidadBolsas * precioBolsa);
        break;
      case "ar":
        acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsas;
        acumuladorAPagarArena = acumuladorAPagarArena + (cantidadBolsas * precioBolsa);
        break;
      case "ca":
        acumuladorAPagarCal = acumuladorAPagarCal + cantidadBolsas;
        acumuladorAPagarCal = acumuladorAPagarCal + (cantidadBolsas * precioBolsa);
        break;
    }
    if (flagPrecioProducto == true || precioBolsa>mayorPrecioProducto){
      mayorPrecioProducto = precioBolsa;
      productoMasCaro = producto;
      flagPrecioProducto = false;
    }

    respuesta = prompt("Quiere ingresar otro producto?")
  }

  if (acumuladorBolsas>10){
    descuento = 15;
  }
  if (acumuladorBolsas>30){
    descuento = 25;
  }

  if (acumuladorBolsasCemento > acumuladorBolsasArena) {
		if (acumuladorBolsasCemento > acumuladorBolsasCal) {
			productoMayorCantBolsas = "Cemento";
		}
		else{
			productoMayorCantBolsas = "Cal";
		}
	}
	else{
		if(acumuladorBolsasCemento < acumuladorBolsasArena){
			if(acumuladorBolsasArena > acumuladorBolsasCal){
        productoMayorCantBolsas = "Arena";
			}
			else{
        productoMayorCantBolsas = "Cal";
			}
		}
	}
  
  totalAPagar = acumuladorAPagarArena + acumuladorAPagarCal + acumuladorAPagarCemento;
  totalAPagarNeto = totalAPagar * (1-descuento/100);

  var mensajeBolsa;

  if(acumuladorBolsas<10){
    mensajeBolsa = "No se llego a la cantidad minima de bolsas para el descuento.";
  }
  else{
    mensajeBolsa = "El importe neto (con descuento) a pagar es: $" + totalAPagarNeto + ".";
  }

  alert("El importe bruto a pagar es: $" + totalAPagar + "." +
  "\n" + mensajeBolsa + 
  "\nEl producto con mayor cantidad de bolsas es: " + productoMayorCantBolsas + "." +
  "\nEl producto mas caro es: " + productoMasCaro + " y su precio por bolsa es: $" + mayorPrecioProducto);
 
} //Problema con el precio final y ver undefined y NaN
