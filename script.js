// Check if geolocation is available
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  document.getElementById('info').textContent = "Geolocation is not supported by your browser.";
}

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const accuracy = position.coords.accuracy;

  document.getElementById('info').innerHTML = `
    Latitude: ${lat} <br>
    Longitude: ${lon} <br>
    Accuracy: ±${accuracy} meters
  `;

  // Initialize map
  const map = L.map('map').setView([lat, lon], 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);

  // Add a marker
  L.marker([lat, lon]).addTo(map)
    .bindPopup('You are here!')
    .openPopup();
}

function error(err) {
  document.getElementById('info').textContent = `Error: ${err.message}`;
}
