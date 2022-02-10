function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada<13)

	{
		alert("Usted no es adolescente.");
	}

	if(edadIngresada>17)

	{
		alert("Usted no es adolescente.");
	}

	/*En vez de usar && usar or

	if(edadIngresada<13 || edadIngresada>17)

	{
		alert("Usted no es adolescente.");
	}
	*/
}