/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marca;
    var precioSinDescuento;
    var precioDescuento;
    var iibb;
    var precioiibb;
               
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    precioSinDescuento = cantidadLamparas * 35;
 
    marca = document.getElementById("Marca").value;

    


    // Caso D.

    /*if (cantidadLamparas == 3)

        {
            if (marca == "ArgentinaLuz")

                {
                    precioDescuento = precioSinDescuento - (precioSinDescuento * 0.15);

                    document.getElementById("txtIdprecioDescuento").value = precioDescuento;
                }
                
            else 

                {
                    if (marca == "FelipeLamparas")

                        {
                            precioDescuento = precioSinDescuento - (precioSinDescuento * 0.10);

                            document.getElementById("txtIdprecioDescuento").value = precioDescuento;
                        }
                    
                    else 

                        {
                            precioDescuentoDos = precioSinDescuento - (precioSinDescuento * 0.05);
                    
                            document.getElementById("txtIdprecioDescuento").value = precioDescuentoDos;
                        }
                }

        }*/

    // Caso C.
   
    /*if (cantidadLamparas == 4)

        {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")

                {
                    precioDescuento = precioSinDescuento - (precioSinDescuento * 0.25);

                    document.getElementById("txtIdprecioDescuento").value = precioDescuento;
                }

            else 

                {
                    precioDescuentoDos = precioSinDescuento - (precioSinDescuento * 0.2);
            
                    document.getElementById("txtIdprecioDescuento").value = precioDescuentoDos;
                }
        }*/
          
   //Caso B.
   
    /*if (cantidadLamparas == 5)

        {
            if (marca == "ArgentinaLuz")

                {
                    precioDescuento = precioSinDescuento - (precioSinDescuento * 0.4);

                    document.getElementById("txtIdprecioDescuento").value = precioDescuento;
                }

            else 

                {
                    precioDescuentoDos = precioSinDescuento - (precioSinDescuento * 0.3);
            
                    document.getElementById("txtIdprecioDescuento").value = precioDescuentoDos;
                }
        }*/

    //Caso A.

    if (cantidadLamparas>=6)

        {
            precioDescuento = precioSinDescuento - (precioSinDescuento * 0.5);

            document.getElementById("txtIdprecioDescuento").value = precioDescuento;

            if (precioDescuento > 120)

            {
                iibb = precioDescuento * 0.1;
        
                precioiibb = precioDescuento + iibb;
        
                document.getElementById("txtIdprecioDescuento").value = precioiibb;
        
                alert("IIBB: Usted pago $" + precioiibb + " siendo $" + iibb + " el impuesto que se pagó.");
            }
        }

    else
    
        { 
            document.getElementById("txtIdprecioDescuento").value = precioSinDescuento;
        }


}
