function mostrar() {
    var destino;
    var cantidadDias;
    var metodoPago;
    var costoBruto;
    var costoNeto;
    var descuentoDestino;
    var descuentoPago;

    destino = document.getElementById("Marca").value;

    cantidadDias = prompt("Ingrese la cantidad de dias:");
    cantidadDias = parseInt(cantidadDias);

    metodoPago = prompt("Ingrese el método de pago:");

    costoBruto = cantidadDias * 100;

    switch (destino) {
        case "América":
            descuentoDestino = -0.5;
            switch (metodoPago) {
                case "Debito":
                    descuentoPago = -0.1;
                    break;
                default:
                    descuentoPago = 0;
                    break;
            }
            break;
        case "África":
            descuentoDestino = -0.6;
            switch (metodoPago) {
                case "Efectivo":
                case "Mercado pago":
                    descuentoPago = -0.15;
                    break;
                default:
                    descuentoPago = 0;
                    break;
            }
            break;
        case "Europa":
            descuentoDestino = -0.2;
            switch (metodoPago) {
                case "Debito":
                    descuentoPago = -0.15;
                    break;
                case "Mercado pago":
                    descuentoPago = -0.1;
                    break;
                default:
                    descuentoPago = -0.05;
                    break;
            }
            break;
        default:
            descuentoDestino = 0.2;
            descuentoPago = 0;
            break;
    }

    costoNeto = costoBruto + (costoBruto * descuentoDestino) + (costoBruto * descuentoPago);

    alert("El costo final de su viaje es: $" + costoNeto);
}
