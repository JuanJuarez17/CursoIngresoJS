function mostrar() {
    var nombre;
    var edad;
    var sexo;
    var estadoCivil;
    var temperaturaCorporal;
    var respuesta;
    var flagTemperatura;
    var nombreMayortemperatura;
    var mayorTemperatura;
    var contadorMayoresViudos;
    var contadorMSyV;
    var contadorMayoresConFiebre;
    var contadorHombresSolteros;
    var acumuladorHombresSolteros;
    var promedioHombresSolteros;

    respuesta = "si";
    flagTemperatura = true;
    contadorMayoresViudos = 0;
    contadorMSyV = 0;
    contadorMayoresConFiebre = 0;
    contadorHombresSolteros = 0;
    acumuladorHombresSolteros = 0;

    while (respuesta == "si") {

        nombre = prompt("Ingrese su nombre: ");
        nombre = nombre.toLowerCase();

        edad = prompt("Ingrese su edad: ");
        edad = parseInt(edad);
        while (isNaN(edad) || edad <= 0) {
            edad = prompt("Error! Ingrese su edad: ");
            edad = parseInt(edad);
        }

        sexo = prompt("Ingrese su sexo: ");
        sexo = sexo.toLowerCase();
        while (sexo != "f" && sexo != "m") {
            producto = prompt("Error! Ingrese su sexo: ");
            producto = producto.toLowerCase();
        }

        estadoCivil = prompt("Ingrese su estado civil: ");
        estadoCivil = estadoCivil.toLowerCase();
        while (estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "v") {
            estadoCivil = prompt("Error! Ingrese su estado civil: ");
            estadoCivil = estadoCivil.toLowerCase();
        }

        temperaturaCorporal = prompt("Ingrese su temperatura corporal: ");
        temperaturaCorporal = parseInt(temperaturaCorporal);
        while (isNaN(temperaturaCorporal) || temperaturaCorporal <= 30 || temperaturaCorporal >= 50) {
            temperaturaCorporal = prompt("Error! Ingrese su temperatura corporal: ");
            temperaturaCorporal = parseInt(temperaturaCorporal);
        }

        if (flagTemperatura == true || temperaturaCorporal > mayorTemperatura) {
            mayorTemperatura = temperaturaCorporal;
            nombreMayortemperatura = nombre;
            flagTemperatura = false;
        }
        if (edad > 60 && estadoCivil == "v") {
            contadorMayoresViudos = contadorMayoresViudos + 1;
        }
        if (sexo == "m" && (estadoCivil == "s" || estadoCivil == "v")) {
            contadorMSyV = contadorMSyV + 1;
        }
        if (edad > 60 && temperaturaCorporal > 38) {
            contadorMayoresConFiebre = contadorMayoresConFiebre + 1;
        }
        if (sexo == "m" && estadoCivil == "s") {
            contadorHombresSolteros = contadorHombresSolteros + 1;
            acumuladorHombresSolteros = acumuladorHombresSolteros + edad;
        }
        respuesta = prompt("Desea agregar mas pasajeros?");
    }

    promedioHombresSolteros = acumuladorHombresSolteros / contadorHombresSolteros;


    alert("El nombre de mayor temperatura es " + nombreMayortemperatura + "." +
        "\nLos cantidad de pasajeros mayores de edad viudos es: " + contadorMayoresViudos + "."
    );

}
