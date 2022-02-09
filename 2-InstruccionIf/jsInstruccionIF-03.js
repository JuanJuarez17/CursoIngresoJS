function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada>=18)

	{
		alert("Usted es mayor de edad.");
	}

	else // Tambien puede escribirse como else if (Condicion) en el mismo renglon. Si se pone solo else se cumplira lo contrario a la condicion anterior
	
	// if(edadIngresada<18) Esta linea no es necesaria

	{
		alert("Usted no es mayor de edad.");
	}
}