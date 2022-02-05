/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt (precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value
    precio2 = parseInt (precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt (precio3);

	var resultadoSuma;

    resultadoSuma = precio1 + precio2 + precio3;

    alert("El precio final es " + resultadoSuma + ".");
}

function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt (precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value
    precio2 = parseInt (precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt (precio3);

	var resultadoPromedio;

    resultadoPromedio = ((precio1 + precio2 + precio3) / 3);

    alert("El promedio es " + resultadoPromedio + ".");
}

function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt (precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value
    precio2 = parseInt (precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt (precio3);

	var resultadoSuma;

    resultadoSuma = precio1 + precio2 + precio3;

    var iva;

    iva = (21/100);

    alert("El precio final, teniendo en cuenta el IVA, es " + resultadoSuma+(resultadoSuma*iva)+ ".");
}