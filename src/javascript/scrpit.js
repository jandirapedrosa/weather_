document.querySelector('search').addEventListener('submit', (event) => {
  event.preventDefault();

  const cityName = document.querySelector('city_name').value;

  if (!cityName) {
    return alert('É preciso degitar uma cidade!');
  }
});