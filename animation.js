const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let startX = 20; // posición inicial x de la línea
let startY = canvas.height / 2; // posición inicial y de la línea
let endX = 20; // posición final x de la línea
let endY = canvas.height / 2; // posición final y de la línea
let angle = 0; // ángulo inicial de la línea inclinada
let destX = 80; // posición x del primer círculo
let destY = 80; // posición y del primer círculo

function drawLine() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar la línea recta inicial
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = "black";
  ctx.stroke();

  // Dibujar la línea inclinada y los círculos
  ctx.beginPath();
  ctx.moveTo(endX, endY);
  angle -= 0.02; // disminuir el ángulo
  endX += 2; // mover la línea hacia la derecha
  endY -= Math.sin(angle) * 10; // mover la línea hacia arriba y abajo
  ctx.lineTo(endX, endY);
  ctx.arc(destX, destY, 10, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();

  // Si la línea llega al destino, mover el destino
  if (endX > destX) {
    destX += 60;
    destY -= 40;
  }

  // Si la línea sale de la pantalla, reiniciar la posición inicial y final
  if (endX > canvas.width + 10) {
    startX = 20;
    startY = canvas.height / 2;
    endX = 20;
    endY = canvas.height / 2;
    angle = 0;
    destX = 80;
    destY = 80;
  }

  ctx.strokeStyle = "black";
  ctx.stroke();
}

setInterval(drawLine, 30); // Llamar a la función drawLine cada 30 milisegundos


