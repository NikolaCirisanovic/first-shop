// Importing express to the index.js file
const path = require('path')
const express = require("express");

const app = express();

// Parameters path '/' and the function

app.get("/", (req, res) => {
  res.send("Hello");
});

// Static files

app.use(express.static(path.join(__dirname, 'client')))

app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, 'client/shop.html')) 
})
  
// Listening for requests on port 3000  ; Running the server

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
