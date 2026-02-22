const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());


// Save latest location
app.post('/location', (req, res) => {

 const data = req.body;

 // Save as latest location
 fs.writeFileSync("latest.json",
 JSON.stringify(data, null, 2));

 console.log("Saved:", data);

 res.send("Location saved");

});


// View location anytime
app.get('/view', (req,res)=>{

 if(fs.existsSync("latest.json")){

  const data = fs.readFileSync("latest.json");

  res.send(data.toString());

 } else {

  res.send("No location saved yet");

 }

});


app.listen(3000, ()=>{

 console.log("Server running on port 3000");

});
