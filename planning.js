const fs = require("fs");

const readCSV = (filename, delimiter = ",") => {
	try {
		const fileContent = fs.readFileSync(filename, { encoding: "utf-8" });
		const rows = fileContent.split("\n");
		const data = [];

		for (let i = 1; i < rows.length; i++) {
			const row = rows[i].trim();
			if (row) {
				const columns = row.split(delimiter);
				data.push(columns);
			}
		}
		return data;
	} catch (err) {
		console.error("Error reading file:", err.message);
		return null;
	}
};

const airportsData = readCSV("airports.csv");
const aeroplanesData = readCSV("aeroplanes.csv");
const valid_flight_data = readCSV("valid_flight_data.csv");
const invalid_flight_data = readCSV("valid_flight_data.csv");

const calculateSeatCost = (inputData) => {
	inputData.forEach((row) => {
		let economySeatCost = Number(row[3]) * 399;
		let businessSeatCost = Number(row[4]) * 999;
		let firstClassSeatCost = Number(row[5]) * 1899;

		let total = (economySeatCost + businessSeatCost + firstClassSeatCost).toFixed(2);
		console.log(total);
	});
};

const calculateTotalSeatCount = () => {
	// let totalSeatCount = Number(row[3]) + Number(row[4]) + Number(row[5]);
};

// Test
calculateSeatCost(aeroplanesData);

// Usage example
// const airportsData = readCSV("airports.csv");
// if (airportsData) {
// 	airportsData.forEach((row) => {
// 		console.log(row);
// 	});
// }
