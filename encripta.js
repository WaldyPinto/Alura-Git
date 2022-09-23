
function limpiaTexto() {
    var texto = document.getElementById("textarea").value = "";
    enable(false,true);
    let textoEncr = '';
    let textoDesenc = '' ;
    }
 
 function encriptaF() {
     var texto =document.getElementById("textarea").value 
     if ( texto != "") {
          
      textoEncr = window.btoa(texto);
      transTexto(textoEncr);
      enable(true,false)  
      return textoEncr;
     }
     else {
         alert("debe introducir texto");
     }
     
 }
 function desencriptaF() {
     enable(false,true);
     textoDesenc = window.atob(textoEncr);
     transTexto(textoDesenc) ;
     }
 
 function enable(p1,p2) {
    document.getElementById("encriptaId").disabled = p1;
     document.getElementById("desencriptaId").disabled = p2;
 }

 function transTexto(textoT) {
 texto = document.getElementById("textarea").value = textoT;  
 }