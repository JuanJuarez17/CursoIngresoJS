/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	var resultado;
	
	resultado = importe*0.75;

	//txtIdResultado.value = resultado;

	document.getElementById("txtIdResultado").value = resultado;
}