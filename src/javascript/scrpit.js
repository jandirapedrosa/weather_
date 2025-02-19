document.querySelector('#search').addEventListener('submit', (event) => {
  event.preventDefault();

  const cityName = document.querySelector('#city_name').value;

  if (!cityName) {
    return showAlert('É preciso digitar uma cidade!');
  }
// ainda não tenho a minha API key
// quando tiver a minha chave, mudar na const apiUrl
  const apiKey = '';
// depois é necessário colocar 'encodeURI' antes de city_key por causa dos acentos nas palavras
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid={API key}`


});

// outra função - mostrar mensagem de alerta
function showAlert(msg) {
  document.querySelector('#alert').innerHTML = msg;
}