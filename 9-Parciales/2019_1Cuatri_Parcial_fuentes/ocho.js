function mostrar() {
    var letraIngresada;
    var numeroIngresado;
    var respuesta;
    var numerosPares;
    var numerosImpares;
    var cantidadCeros;

    respuesta = "si";
    numerosPares=0;
    numerosImpares=0;
    cantidadCeros=0;


    while (respuesta == "si") {
        numeroIngresado = prompt("Ingrese un numero: ");
        numeroIngresado = parseInt(numeroIngresado);

        while (isNaN(numeroIngresado)) {

            numeroIngresado = prompt("Error, ingrese un numero.");
            numeroIngresado = parseInt(numeroIngresado);
        }

        while (numeroIngresado < -100 || numeroIngresado > 100) {
            numeroIngresado = prompt("Error, el numero esta fuera del rango. Ingrese un numero nuevamente");
            numeroIngresado = parseInt(numeroIngresado);
        }

        if(numeroIngresado==0)
        {
            cantidadCeros=cantidadCeros+1;
        }
        
        else
        {
            if (numeroIngresado%2==0)
            {
                numerosPares=numerosPares+1;
            }

            numerosImpares=numerosImpares+1;
        }
        respuesta = prompt("Desea continuar?")
    }


    alert("La cantidad de numeros pares ingresada es: " + numerosPares);
    alert("La cantidad de numeros impares ingresada es: " + numerosImpares);
    alert("La cantidad de ceros es: " + cantidadCeros);



}
