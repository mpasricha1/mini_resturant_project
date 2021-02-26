const path = require("path")
const fileUtil = require("../utils/fileUtils")

module.exports = app =>{
	app.get('/', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/home.html"))
	});

	app.get('/', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/tables.html"))
	});

	app.get('/', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/make.html"))
	});

	app.get('/', (req, res) =>{
		res.sendFile(path.join(__dirname, "../api/tables.json"))
	});

	app.get('/', (req, res) =>{
		res.sendFile(path.join(__dirname, "../api/waitlist.json"))
	});

	app.get("/api/tables", function(req,) {
		return fileUtils.getData("tables")
	});
	
	app.get("/api/tables", function(req,) {
		return fileUtils.getData("waitlist")
	});


}