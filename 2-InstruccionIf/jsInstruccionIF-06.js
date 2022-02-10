function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada<13)

	{
		alert("Usted es menor de edad.");
	}

	if(edadIngresada>=13 && edadIngresada<=17)

	{
		alert("Usted es adolescente.");
	}

	if(edadIngresada>=18)

	{
		alert("Usted es mayor de edad.");
	}

	/*El programa mas eficiente es aquel que se detiene menos veces
	Por ende utilizar la menor cantidad de if (el programa para aqui)
	En else el programa no para*/
}