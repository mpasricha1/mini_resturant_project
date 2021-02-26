const path = require("path")
const fileUtil = require("../utils/fileutils")

module.exports = app =>{
	app.get('/', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/home.html"))
	});
	
	app.get('/home', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/home.html"))
	});

	app.get('/tables', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/tables.html"))
	});

	app.get('/make', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/make.html"))
	});

	app.get("/api/tables", function(req, res) {
		return res.json(fileUtils.getData("tables"))
	});
	
	app.get("/api/tables", function(req, res) {
		return res.json(fileUtils.getData("waitlist"))
	});


}