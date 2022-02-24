function mostrar() {
    var letraIngresada;
    var numeroIngresado;
    var respuesta;
    var contadorPares;
    var contadorImpares;
    var contadorCeros;
    var sumaPositivos;
    var sumaNegativos;
    var contadorPositivos;
    var promedioPositivos;
    var flagPrimerNumero;
    var numeroMaximo;
    var numeroMinimo;
    var letraMinimo;
    var letraMaximo;

    respuesta = "si";
    contadorPares = 0;
    contadorImpares = 0;
    contadorCeros = 0;
    sumaPositivos = 0;
    sumaNegativos = 0;
    contadorPositivos = 0;
    flagPrimerNumero = true;

    while (respuesta == "si") {

        letraIngresada = prompt("Ingrese una letra:");

        while (!isNaN(letraIngresada)) {
            letraIngresada = prompt("Error. Ingrese una letra:");
        }

        numeroIngresado = prompt("Ingrese un numero:");
        numeroIngresado = parseFloat(numeroIngresado);

        while (isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100) {
            numeroIngresado = prompt("Error. Ingrese un numero:");
            numeroIngresado = parseFloat(numeroIngresado);
        }
        if (numeroIngresado != 0 && numeroIngresado % 2 == 0) {
            contadorPares = contadorPares + 1;
        }
        else {
            if (numeroIngresado == 0) {
                contadorCeros = contadorCeros + 1;
            }
            else {
                contadorImpares = contadorImpares + 1;
            }
        }
        if (numeroIngresado > 0) {
            sumaPositivos = sumaPositivos + numeroIngresado;
            contadorPositivos = contadorPositivos + 1;
        }
        else {
            sumaNegativos = sumaNegativos + numeroIngresado
        }
        if (flagPrimerNumero == true) {
            numeroMaximo = numeroIngresado;
            numeroMinimo = numeroIngresado;
            letraMaximo = letraIngresada; // 1
            letraMinimo = letraIngresada; // 1
            flagPrimerNumero = false;
        }
        else {
            if (numeroIngresado < numeroMinimo) {
                numeroMinimo = numeroIngresado;
                letraMinimo = letraIngresada;
            }
            else {
                if (numeroIngresado > numeroMaximo) {
                    numeroMaximo = numeroIngresado;
                    letraMaximo = letraIngresada;
                }
            }
        }
        respuesta = prompt("Desea continuar?");
    }

    promedioPositivos = sumaPositivos / contadorPositivos;

    document.write("La cantidad de numeros pares es : " + contadorPares + ".");
    document.write("<br>La cantidad de numeros impares es : " + contadorImpares + ".");
    document.write("<br>La cantidad de ceros es : " + contadorCeros + ".");
    document.write("<br>El promedio de numeros positivos es : " + promedioPositivos + ".");
    document.write("<br>La suma de los numeros negativos es : " + sumaNegativos + ".");
    document.write("<br>El numero maximo es : " + numeroMaximo + ". Y su letra: " + letraMaximo + ".");
    document.write("<br>El numero minimo es : " + numeroMinimo + ". Y su letra: " + letraMinimo + ".");
}  

// 1 - El primer numero no pasaba por el else que define las letras, entonces si era el maximo o minimo no quedaba registrado.
// 2 - Si no ingreso numeros positivos, el promedioPositivos me da Nan, tengo que evitar esto?

