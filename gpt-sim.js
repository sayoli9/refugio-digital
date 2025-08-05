const askBtn = document.getElementById('ask-btn');
const input = document.getElementById('user-input');
const responseBox = document.getElementById('response');

askBtn.onclick = () => {
  const q = input.value.trim().toLowerCase();
  let response = "";

  if (q.includes("contraseña")) {
    response = "Una buena contraseña tiene más de 12 caracteres, incluye números, símbolos y no debe repetirse en otros sitios 😉";
  } else if (q.includes("ansiedad")) {
    response = "Respira. Haz una pausa. Apaga notificaciones por 10 minutos. Tu bienestar va primero, no tus likes 💗";
  } else if (q.includes("citas")) {
    response = "¿Citas online? Sí se puede, pero nunca compartas fotos íntimas con desconocidos y siempre avisa a alguien antes de encontrarte en persona.";
  } else {
    response = "No tengo una respuesta exacta aún, pero aquí estoy para acompañarte 💬 ¿Quieres intentar preguntarlo de otra forma?";
  }

  responseBox.textContent = response;
  input.value = "";
};
