/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	var aumento;
	
	//resultado = sueldo*1.10;

	aumento = prompt("Ingrese Aumento");

	document.getElementById("txtIdResultado").value = sueldo * (1 + (aumento/100));

	// txtIdResultado.value = resultado; ---> Funciona pero no es recomendable, se pueden pisar las variables.

	// Acordarse las comillas en .getElementById() sino no funciona

	alert("Su sueldo es de " + sueldo + " pesos y con un aumento de " + aumento + " le queda un valor de " + document.getElementById("txtIdResultado").value)
	//Con esto sale un pop up

	//Es la version 9 bis, el 9 es similar al 10

	//Revisar que aumento y descuento no se usa *0,1 por ejemplo, sino sumas y restas como se hizo en este.

	//document.getElementById("txtIdResultado").value = "Su sueldo es " + sueldo * (1 + (aumento/100));
	//Con esto se puede escribir en el cuadro de resultado
}
