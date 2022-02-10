function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada); // Para que lo pase a caracter numerico.

	console.log(edadIngresada);

	if(edadIngresada==15) // Verdadera, se ejecuta lo que esta en las llaves siguientes

	{
		alert("Niña bonita");
		//console.log("Condicion verdadera"); Ver en la consola
	}

	if(edadIngresada!=15) // Verdadera, se ejecuta lo que esta en las llaves siguientes
	
	{
		alert("No Niña bonita");
	}

	console.log("Ejercicio terminado");
	/* El console.log verifica son "puntos de control" a travez del programa, se le puede pedir que
	arroje el valor de una variable o muestre un string deseado.*/
}