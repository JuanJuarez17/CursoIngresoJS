/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var numero;
	numero = 1;

	while(numero<10)
	{
		console.log(numero);
		numero=numero+1;
	}

	alert("El numero final es: " + numero);

	// La sentencia de la condicion se va a ejecutar mientras que la condicion sea verdadera, osea hasta que se vuelva falsa.
	// Ojo con la posicion del console.log




	/*
	console.log(numero);
	numero = numero + 1; // numero ++ / numero +=1
	console.log(numero);
	numero++;
	console.log(numero);
	numero+=1;
	console.log(numero);
	numero+=1;
	console.log(numero);
	*/

}