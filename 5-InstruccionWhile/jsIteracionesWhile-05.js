/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

function mostrar() {
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m") // No es lo mismo poner || en vez de &&
	{
		alert("El sexo ingresado es incorrecto.");
		sexoIngresado = prompt("ingrese f ó m .");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;

	/* El while ejecuta su sentencia {} cuando la condicion de referencia () es verdadera y no ejecutara la sentencia cuando la condicion sea falsa. 
	Ejecuta la sentencia en loop hasta que la condicion sea falsa */
}
