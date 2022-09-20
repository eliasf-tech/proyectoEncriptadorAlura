
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
const mensaje= document.querySelector(".mensaje");
const encriptado= document.querySelector(".mensaje-encriptado");
const noEncontrado= document.querySelector(".no-encontrado");
const parrafo= document.querySelector(".parrafo")
const copiar = document.querySelector(".boton-copiar");
copiar.style.display="none"



function encriptar(){
    let mensajeOriginal= mensaje.value;
    mensajeOriginal= mensajeOriginal.toLowerCase();
    let mensajeEncriptado= "";
    for(let i=0; i<mensajeOriginal.length; i++){
        if(mensajeOriginal[i]=="e"){
            mensajeEncriptado+="enter";
        }else if(mensajeOriginal[i]=="i"){
            mensajeEncriptado+="imes";
        }else if(mensajeOriginal[i]=="a"){
            mensajeEncriptado+="ai";
        }else if(mensajeOriginal[i]=="o"){
            mensajeEncriptado+="ober";
        }else if(mensajeOriginal[i]=="u"){
            mensajeEncriptado+="ufat";
        }else{
            mensajeEncriptado+=mensajeOriginal[i];
        }
    }
    return mensaje.value=mensajeEncriptado;

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

function btnEncriptar(){
    encriptar();
    encriptado.value=mensaje.value;
    encriptado.style.backgroundImage="none";
    mensaje.value = ""; 
    copiar.style.display= "block"
    noEncontrado.style.visibility="hidden"
    parrafo.style.visibility="hidden"  
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(mensaje.value)
    encriptado.value = textoEncriptado
    encriptado.style.backgroundImage="none";
    mensaje.value = ""  
    copiar.style.display= "block"
    noEncontrado.style.visibility="hidden"
    parrafo.style.visibility="hidden"  
}




function copiarTexto() {
  var copyText = document.getElementById("textarea");
  copyText.select();
  document.execCommand("copy");
  alert("Texto copiado");
  location.reload();
}

