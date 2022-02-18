/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		respuesta=prompt("Quiere ingresar otro numero?");
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;
}