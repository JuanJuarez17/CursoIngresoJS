function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada<13)

	{
		alert("Usted es menor de edad.");
	}
	
	else 
	
	{
		if(edadIngresada>=13 && edadIngresada<=17)

		{
			alert("Usted es adolescente.");
		}

		else
		
		{
			alert("Usted es mayor de edad.");
		}
	}

	//Un if anidado dentro de un else puede escribirse mediante else if, en la catedra de marina esta PROHIBIDO. Esta funcion verifica condicion.
	
	/*
	Forma larga ---> No es la mas recomendable.
	
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

	El programa mas eficiente es aquel que se detiene menos veces a verificar condiciones
	Por ende utilizar la menor cantidad de if (el programa se detiene aqui)
	En else el programa NO para a verificar ninguna condicion*/
}