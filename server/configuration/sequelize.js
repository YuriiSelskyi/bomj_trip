var Sequelize = require("sequelize");

//NOTE: The host, the port and the dialect are with the default value, but I'm just leaving them here for configuration demonstration
var connection = new Sequelize('bomj-trip', 'root', 'qNSAFams', {
	host: 'localhost',
	dialect: "mysql",
	define: {
			timestamps: false
	}
});

module.exports.connection = connection;