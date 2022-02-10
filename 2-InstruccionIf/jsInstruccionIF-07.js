function mostrar()
{
	var edadIngresada;
	var estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada<18 && estadoCivil!="Soltero")

	{
		alert("Es muy pequeño para no ser soltero.");
	}
}