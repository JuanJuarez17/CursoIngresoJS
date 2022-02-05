/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;

    largoTerreno = document.getElementById("txtIdLargo").value;
    largoTerreno = parseInt(largoTerreno);

    anchoTerreno = document.getElementById("txtIdAncho").value;
    anchoTerreno = parseInt(anchoTerreno);  

    var resultado;

    resultado = (((largoTerreno * 2)+(anchoTerreno * 2))*3);

    alert("Usted necesita comprar " + resultado + " metros de alambre.");
}
function Circulo () 
{
	var radioTerreno;

    radioTerreno = document.getElementById("txtIdRadio").value;
    radioTerreno = parseInt(radioTerreno);

    var resultado;

    resultado = (((radioTerreno * 2)* 3.14)*3);
    resultado = parseInt(resultado);

    alert("Usted necesita comprar " + (resultado + 1) + " metros de alambre.");
}

function Materiales () 
{
    var largoTerreno;
    var anchoTerreno;

    largoTerreno = document.getElementById("txtIdLargo").value;
    largoTerreno = parseInt(largoTerreno);

    anchoTerreno = document.getElementById("txtIdAncho").value;
    anchoTerreno = parseInt(anchoTerreno);  

    var superficie;

    superficie = (largoTerreno * anchoTerreno);

    var cantidadCemento;

    cantidadCemento = (superficie * 2);

    var cantidadCal;

    cantidadCal = (superficie * 3);
    
    alert("Usted necesita comprar " + cantidadCemento + " bolsas de cemento y " + cantidadCal + " bolsas de cal.");
}