function mostrar()
{
	var numeroRandom;
	var maximo;
	var minimo;

	maximo = 10;
	minimo = 1;

	numeroRandom = Math.round(Math.random()*(maximo-minimo)+minimo);

	/*numeroRandom = Math.random()*(maximo-minimo)+minimo;
	numeroRandom = Math.round(numeroRandom);
	
	// Math.floor() Redondea para abajo
	// Math.ceil() Redondea para arriba
	// Math.round() Redondea al entero mas cercano
	*/
	
	alert(numeroRandom);

}