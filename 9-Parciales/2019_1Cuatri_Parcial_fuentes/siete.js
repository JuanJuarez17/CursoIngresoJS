function mostrar() {
    var alturaIngresada;
    var alturaPromedio;
    var alturaMinima;
    var alturaMaxima;
    var sexoIngresado;
    var sexoMenorEstatura;
    var contador;
    var alturaAcumulador;
    var banderaDelPrimero;
    var contadorMujeresAltas;

    contador = 0;
    alturaAcumulador = 0;
    banderaDelPrimero = "Es el primero";
    contadorMujeresAltas = 0;

    while (contador < 5) {

        contador = contador + 1;

        alturaIngresada = prompt("Ingrese la altura del jugador Nº" + contador + " en centimetros.");
        alturaIngresada = parseInt(alturaIngresada);

        while (alturaIngresada <= 0 || alturaIngresada >= 250) {
            alert("La altura ingresada es incorrecta.");
            alturaIngresada = prompt("Ingrese la altura del jugador Nº" + contador + " en centimetros.");
            alturaIngresada = parseInt(alturaIngresada);
        }

        alturaAcumulador = alturaAcumulador + alturaIngresada;

        if (banderaDelPrimero == "Es el primero") {
            alturaMinima = alturaIngresada;
            alturaMaxima = alturaIngresada;
            banderaDelPrimero = "No es el primero.";
        }
        else {
            if (alturaIngresada < alturaMinima) {
                alturaMinima = alturaIngresada;
            }
            /*else {
                if (alturaIngresada > alturaMaxima) {
                    alturaMaxima = alturaIngresada;
                }
            }*/
        }

        sexoIngresado = prompt("Ingrese el sexo del jugador Nº" + contador);

        while (sexoIngresado != "f" && sexoIngresado != "m") {
            alert("El sexo ingresado es incorrecto.");
            sexoIngresado = prompt("Ingrese el sexo del jugador Nº" + contador);
        }
        if (alturaIngresada <= alturaMinima) {
            sexoMenorEstatura = sexoIngresado;
        }
        if (sexoIngresado == "f" && alturaIngresada > 190) {
            contadorMujeresAltas = contadorMujeresAltas + 1;
        }
    }

    alturaPromedio = alturaAcumulador / contador;

    alert("La altura promedio de los jugadores es: " + alturaPromedio + " centimetros.");
    alert("La altura minima es: " + alturaMinima + " centimetros, y el sexo de ese jugador es " + sexoMenorEstatura + ".");
    alert("La cantidad de mujeres que poseen una estatura mayor a 190 centimetros es: " + contadorMujeresAltas + ".");
}
