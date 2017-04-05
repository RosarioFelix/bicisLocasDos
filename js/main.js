function validateForm(){


 var name       = document.getElementById("name").value;
 var lastname   = document.getElementById("lastname").value;
 var pssw   = document.getElementById("input-password").value;
 var email      = document.getElementById("input-email").value;
 var boton     = document.getElementById("boton").value;

 var name_issue = document.getElementById("name_issue").classList.add("tooltip");
 var lastname_issue = document.getElementById("lastname_issue").classList.add("tooltip");
 var email_issue = 	document.getElementById("email_issue").classList.add("tooltip");
 var psw_issue = 	document.getElementById("psw_issue").classList.add("tooltip");
 var boton_error = 	document.getElementById("boton_issue").classList.add("tooltip");

   if(name != ""){
		if(!name.match(/[A-Z]{1,}[a-z]+/)){
			mostrarTooltip('name_issue');
			mostrar("name_issue","Se Permite solo letras \n Primera letra en Mayúscula");
    }
    }else{
		mostrarTooltip('name_issue');
	 	mostrar("name_issue","No debe haber recuadros en blanco*");
  }

   if(lastname  != ""){
    if(!lastname.match(/[A-Z]{1,}[a-z]+/)){
      mostrarTooltip('lastname_issue');
      mostrar("lastname_issue","Se Permite solo letras \n Primera letra en Mayúscula")
    };
    }else{
    mostrarTooltip('lastname_issue');
    mostrar("lastname_issue","No debe haber recuadros en blanco*");
  }

  if(email  != ""){
    if(!email.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]$/ )){
      mostrarTooltip('email_issue');
      mostrar('email_issue',"Correo no valido \n Example: xxxx@xxxxx.com");
    }
    }else {
    mostrarTooltip('email_issue');
    mostrar("email_issue","No debe haber recuadros en blanco*");
  }
   if(pssw != ""){
    if(pssw.length < 6 || pssw.length> 19|| pssw == "password" || pssw == "123456" || pssw == "098754"){
        mostrarTooltip('psw_issue');
        mostrar('psw_issue'," La contraseña debe tener entre 6 y 18 caracteres");
      }
    }else{
    mostrarTooltip('psw_issue');
    mostrar("psw_issue","No debe haber recuadros en blanco*");
}
 if(boton == 0) {
    mostrarTooltip('boton_issue');
    mostrar("boton_issue","Seleccione Modelo de Bici");
  }

};

function mostrarTooltip(elem){
	document.getElementById(elem).classList.remove("tooltip");
	document.getElementById(elem).classList.add("tooltiptext");
}
function mostrar(element,message) {
  var x = document.getElementById(element);
  x.innerHTML = "";
  x.innerHTML = message;
}
