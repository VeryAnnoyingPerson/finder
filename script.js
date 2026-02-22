// GPS Location
if (navigator.geolocation) {

 navigator.geolocation.getCurrentPosition(function(position){

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  document.getElementById("info").innerHTML =
  "Latitude: " + lat +
  "<br>Longitude: " + lon;

  // Map
  const map = L.map('map').setView([lat, lon], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 19
  }).addTo(map);

  L.marker([lat, lon]).addTo(map)
   .bindPopup("You are here")
   .openPopup();

 });

}

// IP Info
fetch('https://ipapi.co/json/')
.then(response => response.json())
.then(data => {

 document.getElementById('info').innerHTML +=
 "<br><br>City: " + data.city +
 "<br>Region: " + data.region +
 "<br>Country: " + data.country_name +
 "<br>IP: " + data.ip +
 "<br>Timezone: " + data.timezone;

});
