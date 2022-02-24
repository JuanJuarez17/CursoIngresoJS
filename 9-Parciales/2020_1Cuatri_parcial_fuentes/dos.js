/*1. Se ingresan 5 importes, marca del producto y pías de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a. Mínimo importe con su pías
b. Máximo importe con su marca
c. Promedio importe
d. Cantidad de productos de China
e. Sobre el máximo encontrado aplicar un descuento del 10% a dicho importe.*/

/*2. La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA.
Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas hay):
*Nombre de vendedor (Juan, Pedro o María)
*Importe de la venta (numero positivo NO mayor que 10000)
Al terminar de cargar las planillas se debe calcular el total de la comisión por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendrá una
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comisión será del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comisión. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones*/

/*3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa deberá mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.
Sabiendo que:
*Si no tiene hijos no le corresponde asignación familiar
*Si tiene un hijo le corresponde 5000
*Si tiene dos hijos le corresponde 8000 por sus dos hijos
*Y si tiene más de dos hijos le corresponde 10000
d. Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones*/

function mostrar() {
  /* Simulacro 23/02 Ejercicio 1
  var importe;
  var marca;
  var pais;
  var contador;
  var banderaImporte;
  var importeMinimo;
  var importeMaximo;
  var paisMinimo;
  var marcaMaximo;
  var acumuladorImporte;
  var promedioImporte;
  var contadorProdChina;
  var maximoDescuento;

  contador = 0;
  banderaImporte = true;
  acumuladorImporte = 0;
  contadorProdChina = 0;

  while (contador < 5) {
    contador = contador + 1;

    importe = prompt("Ingrese el importe del producto Nº " + contador + ".");
    importe = parseFloat(importe);

    while (isNaN(importe) || importe < 1) {
      importe = prompt("Error! Ingrese el importe del producto Nº " + contador + ".");
      importe = parseFloat(importe);
    }

    acumuladorImporte = acumuladorImporte + importe;

    marca = prompt("Ingrese la marca del producto Nº " + contador + ".");

    pais = prompt("Ingrese el pais de origen del producto Nº " + contador + ".");
    //pais = toLowerCase(pais); Me pasa la variable a minuscula
    //pais = toLowerCase(pais); Me pasa la variable a mayuscula

    while (!(pais == "china" || pais == "uruguay" || pais == "paraguay")) {
      pais = prompt("Error! Ingrese el pais de origen del producto Nº " + contador + ".");
    }

    if (banderaImporte == true) {
      importeMinimo = importe;
      importeMaximo = importe;
      paisMinimo = pais;
      marcaMaximo = marca;
      banderaImporte = false;
    }
    else {
      if (importe < importeMinimo) {
        importeMinimo = importe;
        paisMinimo = pais;
      }
      else {
        if (importe > importeMaximo) {
          importeMaximo = importe;
          marcaMaximo = marca;
        }
      }
    }
    if (pais=="china"){
      contadorProdChina = contadorProdChina + 1;
    }
  }//Fin del while

  promedioImporte = acumuladorImporte / contador;
  maximoDescuento = importeMaximo * (1-10/100);

  alert("El producto de importe minimo es: " + importeMinimo + " y su pais de origen es: " + paisMinimo + "." +
  "\nEl producto de importe maximo es: " + importeMaximo + " y su marca es: " + marcaMaximo + "." +
  "\nEl importe promedio es: " + promedioImporte + "." +
  "\nLa cantidad de productos de China es: " + contadorProdChina + "." +
  "\nEl producto maximo con un descuento del 10% es: " + maximoDescuento + ".");*/

  /* Simulacro 23/02 Ejercicio 2
  var nombre;
  var importe;
  var respuesta;
  var acumuladorJuan;
  var acumuladorPedro;
  var acumuladorMaria;
  var contadorJuan;
  var contadorPedro;
  var contadorMaria;
  var importeFinalJuan;
  var importeFinalPedro;
  var importeFinalMaria;
  var acumuladorMaximo;
  var vendedorMaximo;

  respuesta = "si";
  acumuladorJuan = 0;
  acumuladorPedro = 0;
  acumuladorMaria = 0;
  contadorJuan = 0;
  contadorPedro = 0;
  contadorMaria = 0;

  while (respuesta == "si") {

    nombre = prompt("Ingrese el nombre del vendedor:");

    while (!(nombre == "juan" || nombre == "pedro" || nombre == "maria")) {
      nombre = prompt("Error! Ingrese el nombre del vendedor:");
    }

    importe = prompt("Ingrese el importe de la venta: ");
    importe = parseFloat(importe);

    while (isNaN(importe) || importe <= 0 || importe > 10000) {
      importe = prompt("Error! Ingrese el importe de la venta: ");
      importe = parseFloat(importe);
    }
    switch (nombre) {
      case "juan":
        acumuladorJuan = acumuladorJuan + importe;
        contadorJuan = contadorJuan + 1;
        break;
      case "pedro":
        acumuladorPedro = acumuladorPedro + importe;
        contadorPedro = contadorPedro + 1;
        break;
      case "maria":
        acumuladorMaria = acumuladorMaria + importe;
        contadorMaria = contadorMaria + 1;
        break;
    }
    respuesta = prompt("Desea continuar cargando planillas?");
  }
  if (acumuladorJuan > 500000) {
    importeFinalJuan = acumuladorJuan * (1 + 10 / 100);
  }
  else {
    importeFinalJuan = acumuladorJuan * (1 + 5 / 100);
  }
  if (acumuladorPedro > 500000) {
    importeFinalPedro = acumuladorPedro * (1 + 10 / 100);
  }
  else {
    importeFinalPedro = acumuladorPedro * (1 + 5 / 100);
  }
  if (acumuladorMaria > 500000) {
    importeFinalMaria = acumuladorMaria * (1 + 10 / 100);
  }
  else {
    importeFinalMaria = acumuladorMaria * (1 + 5 / 100);
  }
  if(acumuladorJuan>acumuladorPedro){
    if (acumuladorJuan>acumuladorMaria){
      acumuladorMaximo = acumuladorJuan;
      vendedorMaximo = "Juan";
    }
    else{
      acumuladorMaximo = acumuladorMaria;
      vendedorMaximo = "Maria";
    }
  }
  if(acumuladorPedro>acumuladorMaria){
    if (acumuladorPedro>acumuladorJuan){
      acumuladorMaximo = acumuladorPedro;
      vendedorMaximo = "Pedro";
    }
    else{
      acumuladorMaximo = acumuladorJuan;
      vendedorMaximo = "Juan";
    }
  }
  if(acumuladorMaria>acumuladorJuan){
    if (acumuladorMaria>acumuladorPedro){
      acumuladorMaximo = acumuladorMaria;
      vendedorMaximo = "Maria";
    }
    else{
      acumuladorMaximo = acumuladorPedro;
      vendedorMaximo = "pedro";
    }
  }
  alert("Vendedor Juan. Importe total: " + acumuladorJuan + ". Cantidad de ventas: " + contadorJuan + ". Importe con comisiones: " + importeFinalJuan + "." + 
  "\nVendedor Pedro. Importe total: " + acumuladorPedro + ". Cantidad de ventas: " + contadorPedro + ". Importe con comisiones: " + importeFinalPedro + "." +
  "\nVendedora Maria. Importe total: " + acumuladorMaria + ". Cantidad de ventas: " + contadorMaria + ". Importe con comisiones: " + importeFinalMaria + "." +
  "\nEl vendedor de mayor ventas es: " + vendedorMaximo + " con un total de: " + acumuladorMaximo + ".");*/

  var nombre;
  var apellido;
  var genero;
  var cantHijos;
  var contador;
  var contadorGenero;
  var contadorFemenino;
  var contadorMasculino;
  var contadorNoBinario;
  var porcentajeFemenino;
  var porcentajeMasculino;
  var porcentajeNoBinario;
  var flagHijosNoBinario;
  var cantHijosNoBinarioMaximo;
  var nombreNoBimarioMasHijos;
  var flagPrimeroSinHijos;
  var nombrePrimerEmpleadoSinHijos;
  var apellidoPrimerEmpleadoSinHijos;
  var asignacionUnHijo;
  var asignacionDosHijos;
  var asignacionMasHijos;
  var asignacionTotal;

  contador = 0;
  contadorGenero = 0;
  contadorFemenino = 0;
  contadorMasculino = 0;
  contadorNoBinario = 0;
  flagHijosNoBinario = true;
  flagPrimeroSinHijos = true;
  asignacionUnHijo = 0;
  asignacionDosHijos = 0;
  asignacionMasHijos = 0;

  while (contador < 5) { //Poner 10

    contador = contador + 1;

    nombre = prompt("Ingrese el nombre del empleado Nº " + contador + ".");

    apellido = prompt("Ingrese el apellido del empleado Nº " + contador + ".");

    genero = prompt("Ingrese el genero del empleado Nº " + contador + ".");
    while (genero != "femenino" && genero != "masculino" && genero != "no binario") {
      genero = prompt("Error! Ingrese el genero del empleado Nº " + contador + ".");
    }
    contadorGenero = contadorGenero + 1;

    cantHijos = prompt("Ingrese la cantidad de hijos del empleado Nº " + contador + ".");

    while (isNaN(cantHijos) || cantHijos < 0) {
      cantHijos = prompt("Error! Ingrese la cantidad de hijos del empleado Nº " + contador + ".");
    }
    if (flagPrimeroSinHijos == true && cantHijos==0){
      nombrePrimerEmpleadoSinHijos = nombre;
      apellidoPrimerEmpleadoSinHijos = apellido;
      flagPrimeroSinHijos = false;
    }
    switch (genero) {
      case "femenino":
        contadorFemenino = contadorFemenino + 1;
        break;
      case "masculino":
        contadorMasculino = contadorMasculino + 1;
        break;
      case "no binario":
        contadorNoBinario = contadorNoBinario + 1;
        if (flagHijosNoBinario == true || cantHijos > cantHijosNoBinarioMaximo) {
          cantHijosNoBinarioMaximo = cantHijos;
          nombreNoBimarioMasHijos = nombre;
          flagHijosNoBinario = false;
        }
        break;
    }
    switch (cantHijos) {
      case "0":
        break;
      case "1":
        asignacionUnHijo = asignacionUnHijo + 5000;
        break;
      case "2":
        asignacionDosHijos = asignacionDosHijos + 8000; 
        break;
      default:
        asignacionMasHijos = asignacionMasHijos + 10000;
        break;
    }
  } // Fin del while

  porcentajeFemenino = (contadorFemenino / contadorGenero) * 100;
  porcentajeMasculino = (contadorMasculino / contadorGenero) * 100;
  porcentajeNoBinario = (contadorNoBinario / contadorGenero) * 100;

  asignacionTotal = asignacionUnHijo + asignacionDosHijos + asignacionMasHijos;

  document.write("El porcentaje de empleados de genero femenimo es: " + porcentajeFemenino + "%." +
    "<br>El porcentaje de empleados de genero masculino es: " + porcentajeMasculino + "%." +
    "<br>El porcentaje de empleados de genero no binario es: " + porcentajeNoBinario + "%." +
    "<br>El nombre del empleado no binario con mayor cantidad de hijos es: " + nombreNoBimarioMasHijos + "." + 
    "<br>El nombre y apellido del primer empleado sin hijos es: " + nombrePrimerEmpleadoSinHijos + " " + apellidoPrimerEmpleadoSinHijos + "." +
    "<br>La empresa debera pagar un total de: $" + asignacionTotal + " en asignaciones.");
}
