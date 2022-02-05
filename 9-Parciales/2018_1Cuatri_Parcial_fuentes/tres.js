function mostrar()
{
    var precio;
    var descuento;

    precio = prompt("Ingrese el precio");

    descuento = prompt("Ingrese el descuento")

    var precioFinal;

    precioFinal = precio * (1 - (descuento/100));

    document.getElementById("elPrecioFinal").value = precioFinal;
}
