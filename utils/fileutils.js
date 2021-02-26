const fs = require("fs");
const path = require("path");

const getData = (listType) => {
	const type = determineType();
	return JSON.parse(fs.readFileSync(path.join(__dirname, type)));
}

const saveData = (savedNotesList) => {
	const type = determineType();
	fs.writeFile(path.join(__dirname, type), JSON.stringify(savedNotesList), "utf8", (err) =>{
			err ? console.log(err) : console.log("Note Successfuly Saved"); 
		});
}; 

const determineType = (listType) => {
	return listType === "tables" ? "../db/tables.json" : "../db/waitlist.json"
}
module.exports = {getData, saveData}; 