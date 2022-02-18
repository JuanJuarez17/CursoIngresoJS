/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		else
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}

		respuesta=prompt("Desea ingresar otro numero?")
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;
}