const express = require("express");


const app = express(); 
const PORT = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/routes")(app); 

app.listen(PORT, () =>{
	console.log(`Listening on Port: ${PORT}`);
})