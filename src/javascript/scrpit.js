document.querySelector('#search').addEventListener('submit', (event) => {
  event.preventDefault();

  const cityName = document.querySelector('#city_name').value;

  if (!cityName) {
    return showAlert('É preciso digitar uma cidade!');
  }


});

// outra função - mostrar mensagem de alerta
function showAlert(msg) {
  document.querySelector('#alert').innerHTML = msg;
}