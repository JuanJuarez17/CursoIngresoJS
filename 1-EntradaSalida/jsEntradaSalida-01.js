/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
	
{
	// Ejercicio original.

	/*	
		"hola mundo" ---> Texto
		1 ---> Number
		true ---> Boolean

		alert ---> Al presionar un boton dentro de la pag,
		sale un cartel con lo que se menciona en el comando alert,
		ya sea un texto, number o boolean.
		En el alert va lo que queres mostrar
	*/
	
	/*
		var mensaje;
		mensaje = "Esto funciona de maravilla"
		alert(mensaje);
	*/
	
	/*// Ejercicio 1 Sabado 05022022.

	// Declaracion de variables.
	var nombreProducto1;
	var nombreProducto2;
	var nombreProducto3;

	var precioProducto1;
	var precioProducto2;
	var precioProducto3;
	
	var precioBruto;
	var precioProm;
	var precioFinalIva;
	var descuento;
	var precioDescuento;

	// Asignacion de variables mediante entrada.
	nombreProducto1 = prompt("Ingrese el producto N°1:");
	
	precioProducto1 = prompt("Ingrese el precio del producto N°1:");
	precioProducto1 = parseFloat(precioProducto1);
	
	nombreProducto2 = prompt("Ingrese el producto N°2:");
	
	precioProducto2 = prompt("Ingrese el precio del producto N°2:");
	precioProducto2 = parseFloat(precioProducto2);
	
	nombreProducto3 = prompt("Ingrese el producto N°3:");
	
	precioProducto3 = prompt("Ingrese el precio del producto N°3:");
	precioProducto3 = parseFloat(precioProducto3);

	descuento = prompt("Ingrese el porcentaje de descuento deseado: ");
	descuento = parseFloat(descuento).toFixed(2);

	// Asignacion de variables mediante calculo.
	
	precioBruto = precioProducto1 + precioProducto2 + precioProducto3;
	
	precioProm = ((precioProducto1 + precioProducto2 + precioProducto3)/3);
	
	precioFinalIva = (precioProducto1 + precioProducto2 + precioProducto3) * 1.21;

	precioDescuento = (precioFinalIva * (1 - (descuento/100))).toFixed(2);

	// Salida de datos.

	alert("El precio en bruto es: " + precioBruto + 
	". El precio promedio es: " + precioProm + 
	". El precio final con IVA es: " + precioFinalIva + 
	". El precio final, teniendo en cuenta el descuento, resulta: " + precioDescuento);

	// Declarar todas las variables al comiendo, no declarar a medida que las necesito.
	// Se deben parsear todos los datos que ingresen al programa, por prompt o por ID.*/

	// Ejercicio Jugueteria Sabado 05022022.

	// Declaracion de variables.
	var diagonalAB;
	var diagonalCD;
	var ladoCorto;
	var ladoLargo;
	var perimetro;
	var curvasInteriores;

	ladoCorto = prompt("Ingrese la medida del lado corto del cometa en centrimetros:");
	ladoCorto = parseFloat(ladoCorto);

	ladoLargo = prompt("Ingrese la medida del lado largo del cometa en centrimetros:");
	ladoLargo = parseFloat(ladoLargo);

	perimetro = ladoCorto * 2 + ladoLargo * 2;

	//alert("El perimetro del cometa es: " + perimetro);



}

