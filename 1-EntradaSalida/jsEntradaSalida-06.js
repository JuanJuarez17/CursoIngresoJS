/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaro
	var numero1;
	var numero2;

	//Asignacion & Parseo
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	//Declaro
	var suma;

	//Operacion matematica
	suma = numero1+numero2;

	//+ ---> concatena ya sea numero o string
	
	//Mostar
	alert("La suma es: " + suma);

	//parseInt ---> Nos aseguramos que el valor devuelto sea un numero
}

