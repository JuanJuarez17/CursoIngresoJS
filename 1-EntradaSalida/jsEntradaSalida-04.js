/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	/*	
		Porque aparece una ventana sin datos luego de ingresar el
		nombre?
	*/	

	var primerNombre;

	primerNombre = txtIdNombre.value

	txtIdNombre.value = prompt("Ingrese su nombre")

	alert(primerNombre);

}

