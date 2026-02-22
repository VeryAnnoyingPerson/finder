function shareLocation(){

 navigator.geolocation.getCurrentPosition(function(position){

  const data = {

   latitude: position.coords.latitude,
   longitude: position.coords.longitude,

   time: new Date()

  };

  fetch("https://YOURSERVER.onrender.com/location",{

   method:"POST",

   headers:{
    "Content-Type":"application/json"
   },

   body:JSON.stringify(data)

  });

  document.getElementById("status").innerHTML =
  "Location Shared Successfully";

 });

}
