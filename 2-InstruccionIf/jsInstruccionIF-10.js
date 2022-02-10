function mostrar()
{
	var notaExamen;

	notaExamen = Math.random()*(10-1)+1
	notaExamen = Math.round(notaExamen);

	console.log(notaExamen);
	
	if(notaExamen>=9)

	{
		alert("Excelente.");
	}

	else

	{
		if(notaExamen>=4 && notaExamen<=9)

		{
			alert("Aprobo.");
		}
	
		else
	
		{
			alert("Vamos, la proxima se puede.");
		}
	}



}