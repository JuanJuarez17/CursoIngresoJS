function mostrar() {
	var hora;
	hora = document.getElementById("txtIdHora").value;
	switch (hora) {
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es de mañana.");
			break;
	}
}