
const randomButton = document.querySelector('#boton');
const cardDiv = document.querySelector('#card');

let password = prompt("Contraseña:");

while (password != 'Chilorio21') {
  let password = prompt("Contraseña:");
}

randomButton.addEventListener('click', function (e) {
  const random = Math.floor(Math.random() * 134) + 2;
  cardDiv.style.backgroundImage = `url(CartasPNG/${random}.png)`;
})