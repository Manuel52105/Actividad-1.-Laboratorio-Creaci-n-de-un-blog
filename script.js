// Muestra la fecha y hora actual en la cima de la página
function actualizarFecha() {
  const ahora = new Date();
  const fechaFormateada = ahora.toLocaleString("es-ES", {
    dateStyle: "full",
    timeStyle: "short",
  });
  document.getElementById("fecha").textContent = `🕒 ${fechaFormateada}`;
}

actualizarFecha();
setInterval(actualizarFecha, 60000); // Actualiza cada minuto

