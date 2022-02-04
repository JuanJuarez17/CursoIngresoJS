/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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
}

function restar()
{
	var numero1;
	var numero2;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	
	var resta;
	
	resta = numero1-numero2;
	
	alert("La resta es: " + resta);
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	
	var producto;
	
	producto = numero1*numero2;
	
	alert("El producto es: " + producto);
}

function dividir()
{
	var numero1;
	var numero2;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	
	var cociente;
	
	cociente = numero1/numero2;
	
	alert("El cociente es: " + cociente);
}

