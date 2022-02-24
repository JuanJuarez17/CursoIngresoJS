/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. Listo
2-Suma de los positivos. Listo
3-Cantidad de positivos. Listo
4-Cantidad de negativos. Listo
5-Cantidad de ceros. Listo
6-Cantidad de números pares. Listo
7-Promedio de positivos. Listo
8-Promedios de negativos. Listo
9-Diferencia entre positivos y negativos, (positvos-negativos). Listo*/
function mostrar() {
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorCeros;
	var contadorPositivos;
	var contadorNegativos;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	respuesta = "si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseFloat(numeroIngresado);

		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Error, ingrese un numero:");
			numeroIngresado = parseFloat(numeroIngresado);
		}

		if (numeroIngresado < 0) {
			sumaNegativos = sumaNegativos + numeroIngresado;
		}
		else {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		if (numeroIngresado > 0) {
			contadorPositivos = contadorPositivos + 1;
		}
		else {
			if (numeroIngresado == 0) {
				contadorCeros = contadorCeros + 1;
			}
			else {
				contadorNegativos = contadorNegativos + 1;
			}
		}
		if (numeroIngresado != 0 && numeroIngresado % 2 == 0) {
			contadorPares = contadorPares + 1;
		}
		respuesta = prompt("desea continuar?");
	}//fin del while

	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioPositivos = parseFloat(promedioPositivos).toFixed(2);

	promedioNegativos = sumaNegativos / contadorNegativos;
	promedioNegativos = parseFloat(promedioNegativos).toFixed(2);

	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es : " + sumaNegativos + ".");
	document.write("<br>La suma de positivos es : " + sumaPositivos + ".");
	document.write("<br>La cantidad de positivos es : " + contadorPositivos + ".");
	document.write("<br>La cantidad de negativos es : " + contadorNegativos + ".");
	document.write("<br>La cantidad de ceros es : " + contadorCeros + ".");
	document.write("<br>La cantidad de numeros pares es : " + contadorPares + ".");
	document.write("<br>El promedio de numeros positivos es : " + promedioPositivos + ".");
	document.write("<br>El promedio de numeros negativos es : " + promedioNegativos + ".");
	document.write("<br>La diferencia entre numeros positivos y negativos es : " + diferencia + ".");
}//FIN DE LA FUNCIÓN

/*Si no ingreso un numero positivo, el promedio de los mismos me va a dar un NaN, 
esto lo puedo solucionar con un mensaje iniciado a la entrada (mensajeAlcohol = No ingresaron productos) 
y con un if cambiando el mensaje cuando el contador sea distinto de 0.
Pasa lo mismo con los negativos*/