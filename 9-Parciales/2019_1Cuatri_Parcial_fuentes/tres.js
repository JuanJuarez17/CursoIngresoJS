function mostrar()
{
    var precio;
    var descuento;

    precio = prompt("Ingrese el precio.");
    descuento = prompt("Ingrese porcentaje de descuento.");

    var precioFinal;

    precioFinal = precio * (1-(descuento/100));

    alert("El precio final se mostrara en pantalla.")

    document.getElementById("elPrecioFinal").value = precioFinal;
    document.getElementById("elPrecioFinal").value = ("$" + parseFloat(document.getElementById("elPrecioFinal").value).toFixed(2));
}
