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

	/*Tambien se puede usar el operador logico or
	Recordar que mientas mas if ponga en el codigo, mas veces se detendra el programa a verificar la condicion (lo hace mas lento).
	En else el programa NO para a verificar ninguna condicion

	if(edadIngresada<13 || edadIngresada>17)

	{
		alert("Usted no es adolescente.");
	}
	*/
}