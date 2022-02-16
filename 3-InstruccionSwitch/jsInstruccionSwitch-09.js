function mostrar() {
	var estacionIngresada;
	var destino;
	var tarifaViaje;
	var descuentoAumento;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;


	switch (destino) {
		case "Bariloche":
			switch (estacionIngresada) {
				case ("Invierno"):
					descuentoAumento = 0.2;
					break;
				case ("Verano"):
					descuentoAumento = -0.2;
					break;
				default:
					descuentoAumento = -0.1;
					break;
			}
			break;
		case "Mar del plata":
			switch (estacionIngresada) {
				case ("Invierno"):
					descuentoAumento = -0.2;
					break;
				case ("Verano"):
					descuentoAumento = 0.2;
					break;
				default:
					descuentoAumento = 0.1;
					break;
			}
			break;
		case "Cataratas":
			switch (estacionIngresada) {
				case ("Invierno"):
					descuentoAumento = -0.1;
					break;
				case ("Verano"):
					descuentoAumento = 0.1;
					break;
				default:
					descuentoAumento = 0.1;
					break;
			}
			break;
		case "Cordoba":
			switch (estacionIngresada) {
				case ("Invierno"):
					descuentoAumento = -0.1;
					break;
				case ("Verano"):
					descuentoAumento = 0.1;
					break;
				default:
					descuentoAumento = 0;
					break;
			}
			break;
	}
	tarifaViaje = 15000 + (15000 * descuentoAumento);
	alert("La tarifa final de su viaje resulta : $" + tarifaViaje + ".");
}