const path = require('path')
const express = require("express");

const app = express();


    // app.get("/", (req, res) => {
    //   res.send();
    // });


app.use(express.static(path.join(__dirname, 'client')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'client/shop.html')) 
})
  

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
