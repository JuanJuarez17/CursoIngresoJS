function mostrar()
{
	/*var edadIngresada;
	var estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada<18 && estadoCivil!="Soltero")

	{
		alert("Es muy pequeño para no ser soltero.");
	}*/

	// Ejercicio 12022022

	var edadIngresada;
	var mensaje;
	var nombre;
	var estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	nombre = prompt("Ingrese su nombre:");
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada<13)
	{
		mensaje = "Feliz dia!"

		if(nombre == "Ricardo")
		{
			mensaje = mensaje + " Muy chiquito para ese nombre!!!"
		}
	}
	else
	{
		if(edadIngresada<17)
		{
			mensaje = "Usted es adolescente."

			if(edadIngresada==17)
			{
				mensaje = mensaje + " Ultimo año!!!"
			}
			if(nombre == "Violeta")
			{
				mensaje = mensaje + " Como un color!!!"
			}
		}
		else
		{
			mensaje = "Tiene edad de laburar."

			if(edadIngresada==33)
			{
				mensaje = mensaje + " Como cristo."
			}
			else
			{
				if(edadIngresada>60)
				{
					mensaje = "A jubilarse."

					if(edadIngresada==88)
					{
						mensaje = mensaje + " Lindo numero."
					}
					if(nombre == "Alfredo")
					{
						mensaje = mensaje + " Como el de Queen!!!"
					}
				}
			}
			if(estadoCivil=="Soltero")
			{
				mensaje = "A salir."
			}
		}
		if(estadoCivil == "Casado")
		{
			mensaje = mensaje + " Casada quiere casa."
		}
	}
	if (edadIngresada%2==0)
	{
		mensaje = mensaje + " Ademas sos par!!";
	}
	alert(mensaje);

	// Si aparece undefined en el codigo se da por desaprobado el parcial.
}

if(estadoCivil == "Soltero")
{
	mensaje = mensaje + " A salir!!!"
}