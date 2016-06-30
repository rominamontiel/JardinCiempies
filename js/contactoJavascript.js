
/*alert("Exitoso llamado al archivo contacto.js");*/

function validacion(){
	
	var nombre=document.getElementById("nombre").value;
	var dni=document.getElementById("DNI").value;
	var fecha=document.getElementById("datepicker").value;
	var mail=document.getElementById("mail").value;
	var pass=document.getElementById("pass").value;
	var rpass=document.getElementById("rpass").value;
	var formatoMail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	var formatoContraseña = /[0-9a-zA-Z]/;
	var formatoDni = /[0-9]/;
			
	if(nombre=="")
		{alert("Complete su Nombre")
		return false;}
	 
	if(dni=="" || formatoDni.test(dni)==0)
		{alert("Complete su DNI. Ejemplo: 11222333")
		return false;}
	
	if(fecha=="")
		{alert("Complete su fecha de nacimiento")
		return false;}
		
	if(mail=="")
		{alert("Complete su mail")
		return false;}	
	
	if(pass=="")
		{alert("Complete su Contraseña")
		return false;}
		
	if(rpass=="")
		{alert("Reingrese su contraseña")
		return false;}	
		
	if(nombre.length < 10 || nombre.length > 20){
		alert("Escriba su nombre completo [10 a 20 caracteres]")
		return false;
	}	
	
	if(dni.length != 8){
		alert("Ingrese CORRECTAMENTE su D.N.I.")
		return false;
	}

	if(formatoMail.test(mail)==0)
		{alert("[ERROR]- Escriba su mail correctamente");
		return false;}
	
	if(pass.length < 5 || pass.length >10)
		{alert("La contraseña debe tener entre 5 y 10 caracteres")
		return false;}
	
	if(formatoContraseña.test(pass)==0)
		{alert("La contraseña debe contener números y letras");
		return false;}
	
	if(pass!=rpass){
		{alert("Debe Reingresar la misma contraseña");
		return false;}
	}
}	

