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
    var descuento;
    var precioFinal;
    var ib;
                
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;
 
    /*if (cantidadLamparas >= 6)
    {
        descuento = 0.5;
    }
    else
    {
        if (cantidadLamparas == 5)
        { 
            if (marca == "ArgentinaLuz")
            {
                descuento = 0.4;
            }
            else
            {
                descuento = 0.3;
            } 
        }
        else
        {
            if (cantidadLamparas == 4)
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = 0.25;
                }
                else
                {
                    descuento = 0.2;
                }
            }
            else
            {
                if (cantidadLamparas == 3)
                {
                    if (marca == "ArgentinaLuz")
                    {
                        descuento = 0.15;
                    }
                    else
                    {
                        if (marca == "FelipeLamparas")
                        {
                            descuento = 0.1;
                        }
                        else
                        {
                            descuento = 0.05;
                        }
                    }
                }
                else
                {
                    descuento = 0;
                }
            }
        }
    }*/

    // Resolucion de ejercicio por marcas, es mucho mas largo.
    
    if (marca == "ArgentinaLuz")
    {
        if (cantidadLamparas >= 6)
        {
            descuento =0.5;
        }
        else
        {
            if (cantidadLamparas == 5)
            {
                descuento = 0.4;
            }
            else
            {
                if (cantidadLamparas == 4)
                {
                    descuento = 0.25;
                }
                else
                {
                    if (cantidadLamparas == 3)
                    {
                        descuento = 0.15;
                    }
                    else
                    {
                        descuento = 0;
                    }
                }
            }
        }
    }
    else
    {
        if (marca == "FelipeLamparas")
        {
            if (cantidadLamparas >= 6)
            {
                descuento = 0.5;
            }
            else
            {
                if (cantidadLamparas == 5)
                {
                    descuento = 0.3;
                }
                else
                {
                    if (cantidadLamparas == 4)
                    {
                        descuento = 0.25;
                    }
                    else
                    {
                        if (cantidadLamparas == 3)
                        {
                            descuento = 0.1;
                        }
                        else
                        {
                            descuento = 0;
                        }
                    }
                }
            }
        }
        else
        {
            if (cantidadLamparas >= 6)
            {
                descuento = 0.5;
            }
            else
            {
                if (cantidadLamparas == 5)
                {
                    descuento = 0.3;
                }
                else
                {
                    if (cantidadLamparas == 4)
                    {
                        descuento = 0.2;
                    }
                    else
                    {
                        if (cantidadLamparas == 3)
                        {
                            descuento = 0.05;
                        }
                        else
                        {
                            descuento = 0;
                        }
                    }
                }
            }
        }
    }
      
    precioSinDescuento = cantidadLamparas * 35;
    precioFinal = precioSinDescuento - (precioSinDescuento * descuento);

    if (precioFinal >= 120)
    {
        ib = precioFinal * 0.1;
        precioFinal = precioFinal + ib;
        alert("IIBB: Usted pago: $" + ib + ".");
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    
    //document.getElementById("txtIdprecioDescuento").value = descuento; ---> Para debuggear
}