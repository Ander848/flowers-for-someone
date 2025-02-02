
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Gracias por aceptar mi niña, Espero que la pasemos muy bien este 14 de febrero los 2 juntitos, Te amo con todo mi corazon, Espero que sepas que eres la persona mas especial que tengo, Eres mi princesita').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
