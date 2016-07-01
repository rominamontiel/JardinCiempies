/*
---------- PRUEBA ------------

$(document).ready(function() {
	
});

$(window).load(function() {
	alert("La página se encuentra totalmente cargada !!!!!!");
});*/
		
$(document).ready(function(){
	/*alert(">> NO SE ROMPIOO <<");*/
	function esMailValido(emailAddress) {
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		return pattern.test(emailAddress);
	};


	$("#enviar").click(function() {
		var nombre = $("#nombre").val();
		var dni = $("#DNI").val();
		var fecha = $("#datepicker").val();
		var mail=$("#mail").val();
		var pass = $("#pass").val();
		var rpass = $("#rpass").val();
		//var formatoMail = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
		/*
		var formatoContraseña = /^[a-zA-Z0-9]*$/;
		var formatoDni = /[0-9]/; */
		
		if(nombre == "" || nombre.length < 10 || nombre.length > 20)
			{ $("#mensaje1").fadeIn();
			return false;}
			else
			{$("#mensaje1").fadeOut();
			 $("#correctoN").fadeIn();}
		
		if(dni == "" || dni.length != 8)
			{ $("#mensaje2").fadeIn();
			return false;}
			else
			{$("#mensaje2").fadeOut();
			 $("#correctoD").fadeIn();}
		
		if(fecha=="")
			{ $("#mensaje3").fadeIn();
			return false;}
			else
			{$("#mensaje3").fadeOut();
			 $("#correctoF").fadeIn();}
			 
		if(mail=="")
			{ $("#mensaje4").fadeIn();
			return false;}
			else
			{$("#mensaje4").fadeOut();}	
		
		if(!esMailValido(mail))
			{ $("#mensaje4").fadeIn();
			return false;}
			else
			{ $("#mensaje4").fadeOut();
			 $("#correctoE").fadeIn(); }							
		
		if(pass == "" || pass.length <5 || pass.length >10)
			{ $("#mensaje5").fadeIn();
			return false;}
			else
			{$("#mensaje5").fadeOut();
			 $("#correctoP").fadeIn();}
		
		if(pass != rpass)
			{ $("#mensaje6").fadeIn();
			return false;}
			else
			{$("#mensaje6").fadeOut();
			 $("#correctoR").fadeIn();}
			

 
			
	
	});
});