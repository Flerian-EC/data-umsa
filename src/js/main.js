// Número de teléfono y mensaje
const phoneNumber = "59176252112"; // Reemplaza con el número de teléfono (formato internacional, sin signos '+' o espacios)
const message = "Hola, me gustaria hacer un estudio con DATA UMSA."; // Reemplaza con tu mensaje

// Redirigir al hacer clic
let CONTACTO = document.querySelectorAll("button.boton-contacto");
CONTACTO = [...CONTACTO];

CONTACTO.forEach((element) => {

  
element.addEventListener("click", function () {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

});

