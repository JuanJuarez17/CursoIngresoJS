function mostrar() {
	var destino;
	destino = document.getElementById("txtIdDestino").value;
	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			alert("Frio.");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Calor.");
			break;
	}
}