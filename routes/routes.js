const path = require("path")
const fileUtil = require("../utils/fileUtils")

module.exports = app =>{
	app.get('/', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/index.html"))
	});
}