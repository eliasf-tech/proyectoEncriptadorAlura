
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

const mensaje = document.querySelector(".mensaje-encriptado");

function Encriptar(strEncriptada) {
  var texto = document.getElementById("text").value.toLowerCase();
  var textoEncriptado = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "e") {
      textoEncriptado += "enter";
    } else if (texto[i] == "i") {
      textoEncriptado += "imes";
    } else if (texto[i] == "a") {
      textoEncriptado += "ai";
    } else if (texto[i] == "o") {
      textoEncriptado += "ober";
    } else if (texto[i] == "u") {
      textoEncriptado += "ufat";
    } else {
      textoEncriptado += texto[i];
    }
  }
  document.getElementById("text").value = textoEncriptado;
  return textoEncriptado.toLowerCase;

}

function btnEncriptar(){
  const textoEncriptado = Encriptar();
  
}






function copiarTexto() {
  var copyText = document.getElementById("textarea");
  copyText.select();
  document.execCommand("copy");
  alert("Texto copiado");
}

