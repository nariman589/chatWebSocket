const sql = require("mssql");
const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

const startApp = () => {
	app.listen(PORT, () => {
		"server Started";
	});
};

startApp();
