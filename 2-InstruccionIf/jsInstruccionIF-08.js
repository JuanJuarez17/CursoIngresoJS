function mostrar()
{
	var edadIngresada;
	var estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivil = document.getElementById("estadoCivil").value;

	// Condicion indirecta.

	if(!(edadIngresada<18 || estadoCivil!="Soltero"))

	{
		alert("Es soltero y no es menor.");
	}
		
	// Condicion directa.

	/*if(edadIngresada>=18 && estadoCivil=="Soltero")

	{
		alert("Es soltero y no es menor.");
	}*/
}