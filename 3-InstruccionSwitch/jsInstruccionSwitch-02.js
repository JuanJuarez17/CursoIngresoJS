function mostrar()
{
	var mes;
	mes = document.getElementById("txtIdMes").value;
	switch (mes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
		break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
		break;

		// Despues de agosto se puede poner un default para indicar que hace calor, todas las demas condiciones se dieron antes.
	}
}