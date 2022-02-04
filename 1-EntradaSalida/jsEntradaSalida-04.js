/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	/*	
		Porque aparece una ventana sin datos luego de ingresar el
		nombre?

		document.getElementById("ElID").value=nombreVariable; // Muestra la variable en el campo de una pagina

		nombreVariable=document.getElementById("ElID"); // Toma la variable ingresada en el campo de la pagina
	*/	

	var primerNombre;

	primerNombre = txtIdNombre.value

	txtIdNombre.value = prompt("Ingrese su nombre")

	alert(primerNombre);
	
}

