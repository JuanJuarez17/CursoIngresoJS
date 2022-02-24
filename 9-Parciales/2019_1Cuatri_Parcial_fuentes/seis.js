function mostrar() {
    var hora;
    var mensaje;

    hora = document.getElementById("laHora").value;

    switch (hora) {
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            mensaje = "Es de mañana.";
            break;
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":
            mensaje = "Es de tarde.";
            break;
        default:
            if (hora < 0 || hora > 24) {
                mensaje = "Hora ingresada no valida.";
            }
            else {
                mensaje = "Es de noche."

                if (hora >= 20 && hora <= 24) {
                    mensaje = mensaje + " A dormir."
                }
            }
            break;
    }
    alert(mensaje);
}
