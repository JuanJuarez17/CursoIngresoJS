/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	contador=10; 
	
	while(contador>1)
	{
		console.log(contador);
		contador=contador-1;
	}

	alert("El numero final es: " + contador);

}