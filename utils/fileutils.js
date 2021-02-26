const fs = require("fs");
const path = require("path");

const getData = (listType) => {
	const type = determineType(listType);
	return JSON.parse(fs.readFileSync(path.join(__dirname, type)));
}

const saveData = (reservation, listType) => {
	console.log(listType)
	const type = determineType(listType);
	console.log(type)
	fs.writeFile(path.join(__dirname, type), JSON.stringify(reservation), "utf8", (err) =>{
			err ? console.log(err) : console.log("Reservations Successfuly Saved"); 
		});
}; 

const determineType = (listType) => {
	return listType === "tables" ? "../db/tables.json" : "../db/waitlist.json"
}
module.exports = {getData, saveData}; 