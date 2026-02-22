fetch("https://YOURSERVER.onrender.com/view")

.then(response=>response.json())

.then(data=>{

 const lat = data.latitude;
 const lon = data.longitude;

 const map = L.map('map').setView([lat, lon], 13);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{

  maxZoom:19

 }).addTo(map);

 L.marker([lat,lon]).addTo(map)
 .bindPopup("Friend Location")
 .openPopup();

});
