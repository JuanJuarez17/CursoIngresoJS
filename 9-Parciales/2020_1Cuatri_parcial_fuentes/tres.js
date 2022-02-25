/*3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa deberá mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.
Sabiendo que:
*Si no tiene hijos no le corresponde asignación familiar
*Si tiene un hijo le corresponde 5000
*Si tiene dos hijos le corresponde 8000 por sus dos hijos
*Y si tiene más de dos hijos le corresponde 10000
d. Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones*/

function mostrar() {
	var nombreEmpleado;
	var apellidoEmpleado;
	var generoEmpleado;
	var cantidadHijos;
	var contador;
	var contadorGeneros;
	var contadorGeneroMasculino;
	var contadorGeneroFemenino;
	var contadorGeneroNoBinario;
	var porcentajeGeneroMasculino;
	var porcentajeGeneroFemenino;
	var porcentajeGeneroNoBinario;
	var flagNoBinarioMasHijos;
	var hijosNoBinarioMasHijos;
	var nombreNoBinarioMasHijos;
	var flagSinHijos;
	var nombrePrimerEmpleadoSinHijos;
	var apellidoPrimerEmpleadoSinHijos;
	var acumuladorAsignacion;
	var acumuladorUnHijo;
	var acumuladorDosHijos;
	var acumuladorMasHijos;


	contador = 0;

	contadorGeneros = 0;
	contadorGeneroMasculino = 0;
	contadorGeneroFemenino = 0;
	contadorGeneroNoBinario = 0;
	flagNoBinarioMasHijos = true;
	flagSinHijos = true;
	acumuladorUnHijo = 0;
	acumuladorDosHijos = 0;
	acumuladorMasHijos = 0;

	while (contador < 6) {
		contador = contador + 1;

		nombreEmpleado = prompt("Ingrese el nombre del empleado Nº" + contador + ".");

		apellidoEmpleado = prompt("Ingrese el apellido del empleado Nº" + contador + ".");

		generoEmpleado = prompt("Ingrese el genero del empleado Nº" + contador + ".");

		while (generoEmpleado != "femenino" && generoEmpleado != "masculino" && generoEmpleado != "no binario") {
			generoEmpleado = prompt("Error! Ingrese el genero del empleado Nº" + contador + ".");
		}

		contadorGeneros = contadorGeneros + 1;

		cantidadHijos = prompt("Ingrese la cantidad de hijos del empleado Nº" + contador + ".");
		cantidadHijos = parseInt(cantidadHijos);

		while (isNaN(cantidadHijos) || cantidadHijos < 0) {
			cantidadHijos = prompt("Error! Ingrese la cantidad de hijos del empleado Nº" + contador + ".");
			cantidadHijos = parseInt(cantidadHijos);
		}

		switch (generoEmpleado) {
			case "femenino":
				contadorGeneroFemenino = contadorGeneroFemenino + 1;
				break;
			case "masculino":
				contadorGeneroMasculino = contadorGeneroMasculino + 1;
				break
			case "no binario":
				contadorGeneroNoBinario = contadorGeneroNoBinario + 1;
				if (flagNoBinarioMasHijos == true || cantidadHijos > hijosNoBinarioMasHijos) {
					hijosNoBinarioMasHijos = cantidadHijos;
					nombreNoBinarioMasHijos = nombreEmpleado;
					flagNoBinarioMasHijos = false;
				}
				break
		}
		if (flagSinHijos == true && cantidadHijos == 0) {
			nombrePrimerEmpleadoSinHijos = nombreEmpleado;
			apellidoPrimerEmpleadoSinHijos = apellidoEmpleado;
			flagSinHijos = false;
		}

		switch (cantidadHijos) {
			case 0:
				break;
			case 1:
				acumuladorUnHijo = acumuladorUnHijo + 5000;
				break;
			case 2:
				acumuladorDosHijos = acumuladorDosHijos + 8000;
				break;
			default:
				acumuladorMasHijos = acumuladorMasHijos + 10000;
				break;
		}
	} //

	porcentajeGeneroFemenino = (contadorGeneroFemenino / contador) * 100;
	porcentajeGeneroMasculino = (contadorGeneroMasculino / contador) * 100;
	porcentajeGeneroNoBinario = (contadorGeneroNoBinario / contador) * 100;
	acumuladorAsignacion = acumuladorUnHijo + acumuladorDosHijos + acumuladorMasHijos;

	alert("El procentaje de empleados de genero femenino es: " + porcentajeGeneroFemenino + "%" +
		"\nEl procentaje de empleados de genero masculino es: " + porcentajeGeneroMasculino + "%" +
		"\nEl procentaje de empleados de genero no binario es: " + porcentajeGeneroNoBinario + "%" +
		"\nEl empleado no binario con mayor cantidad de hijos es: " + nombreNoBinarioMasHijos + " y tiene " + hijosNoBinarioMasHijos + " hijos" +
		"\nEl primer empleado sin hijos es: " + nombrePrimerEmpleadoSinHijos + apellidoPrimerEmpleadoSinHijos +
		"\nLa empresa debera pagar un total de: $" + acumuladorAsignacion + " en asignaciones.");
}
