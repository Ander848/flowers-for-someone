const title = document.querySelector('.title')
const text = 'De parte de tu noviecito Ander ¿Quieres ser mi enamorada este 14 de febrero?'.split('')
// Aquí encontramos la posición de "Ander" para agregar un salto de línea después de ella
const breakPoint = text.indexOf('A', text.indexOf('Ander')) + 5; // Aseguramos que sea después de "Ander"

for (let index = 0; index < text.length; index++) {
  if (index === breakPoint) {
    title.innerHTML += `<br>`;  // Agregamos el salto de línea en el lugar adecuado
  }

  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Generar un delay aleatorio entre 0 y 3 segundos
  element.style.animationDelay = `${randomDelay}s`;
});
