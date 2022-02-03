/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*	
		prompt ---> Al presionar un boton en la pagina sale un
		cartel de alerta que nos pide ingresar un valor (texto,
		numero, etc.) luego lo mostrara en un alert.
		En el prompt indica un mensaje y da la posibilidad de
		ingresar algo.

		rojo ---> texto
		variable ---> celeste
	*/

	var primerNombre;

	primerNombre = prompt("Ingrese su nombre")

	alert(primerNombre);
}

