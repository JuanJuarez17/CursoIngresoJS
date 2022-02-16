function mostrar() {
    var numero1;
    var numero2;
    var cuenta;

    numero1 = prompt("Ingrese el primer numero: ");
    numero1 = parseInt(numero1);

    numero2 = prompt("Ingrese el segundo numero: ");
    numero2 = parseInt(numero2);

    if (numero1 == numero2) {
        cuenta = (numero1 + numero2);
    }
    else {
        if (numero1 > numero2) {
            cuenta = numero1 - numero2;

            if (cuenta > 10) {
                alert("La resta es " + cuenta + " y supero el 10.");
            }
        }
        else {
            cuenta = (numero1 + numero2);
        }
    }
    alert(cuenta);
}
