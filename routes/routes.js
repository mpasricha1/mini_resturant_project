const path = require("path")
const fileUtils = require("../utils/fileutils")


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

	app.post('/make', (req, res) =>{
		let tableChart = fileUtils.getData("tables"); 

	 	if(tableChart.length > 2){
	 		let waitList = fileUtils.getData("waitlist");
	 		waitList.push(req.body); 

	 		fileUtils.saveData(waitList, "waitlist"); 
	 	}else{
	 		tableChart.push(req.body); 

	 		fileUtils.saveData(tableChart, "table")
	 	}
	})

	app.get("/api/tables", function(req, res) {
		return res.json(fileUtils.getData("tables"))
	});
	
	app.get("/api/waitlist", function(req, res) {
		return res.json(fileUtils.getData("waitlist"))
	});


}