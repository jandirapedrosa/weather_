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
// faltam mais coisas da API
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid={API key}`

  // constante de resultados - vamos realizar a chamada da API usando o fetch
  const results = await fetch(apoUrl);
  // outra constante
  const json = await results.json();

// sobre os resultados
  if (json.cod === 200) {
    showInfo('FIQUEI AQUIIII!!!')
  } else {
    showAlert('Não foi possível localizar...')
  }

});

// função para guardar toda a informação do if
function showInfo(json) {

}

// função para exibir as informações
function showAlert(msg) {
  document.querySelector('#alert').innerHTML = msg;
}

// outra função - mostrar mensagem de alerta
function showAlert(msg) {
  document.querySelector('#alert').innerHTML = msg;
}