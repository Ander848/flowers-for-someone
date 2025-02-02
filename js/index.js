const title = document.querySelector('.title');
const text = '¿Quieres ser mi enamorada este 14 de febrero?'.split('');

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`; // Corrección aquí
  } else {
    title.innerHTML += `<span style='margin-right: 5px;'></span>`; // Espacio con menor margen
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Genera un retraso aleatorio
  element.style.animationDelay = `${randomDelay}s`;
});
