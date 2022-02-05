function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 18);

	{
		alert("Usted es mayor de edad.");
	}

	// Como se usa el else

	{
		alert("Usted no es mayor de edad.");
	}
}