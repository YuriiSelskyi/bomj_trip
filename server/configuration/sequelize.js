var Sequelize = require("sequelize");

//NOTE: The host, the port and the dialect are with the default value, but I'm just leaving them here for configuration demonstration
var connection = new Sequelize('bomj-trip', 'root', '', {
	logging: false,
	host: 'localhost',
	port: process.env.PORT || 5000,
	dialect: "mysql",
	define: {
		charset: 'utf8',
		collate: 'utf8_general_ci',
		timestamps: false,
		freezeTableName: true
	},
	pool: {
		maxIdleTime: 120000
	}
});

module.exports.connection = connection;