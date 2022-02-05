/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 

{
	var tempFar;

    tempFar = document.getElementById("txtIdTemperatura").value;
    tempFar = parseFloat(tempFar)

    var convCen;

    convCen = (tempFar-32)*(5/9);

    convCen = parseFloat(convCen).toFixed(2); // Googleado
  
    alert(tempFar + " grados Farenheit son " + convCen + " grados Centigrados.")
}

function CentigradosFahrenheit () 

{
    var tempCen;

    tempCen = document.getElementById("txtIdTemperatura").value;
    tempCen = parseFloat(tempCen)

    var convFar;

    convFar = (tempCen*(9/5))+32;

    convFar = parseFloat(convFar).toFixed(2); // Googleado

    alert(tempCen + " grados Centigrados son " + convFar + " grados Farenheit.")
}
