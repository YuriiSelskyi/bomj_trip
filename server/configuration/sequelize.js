var Sequelize = require("sequelize");

//NOTE: The host, the port and the dialect are with the default value, but I'm just leaving them here for configuration demonstration
<<<<<<< HEAD
var connection = new Sequelize('bomj-trip', 'root', '', {
=======
var connection = new Sequelize('bomj-trip', 'root', '914191514q', {
>>>>>>> f655158308d691de55f84a45fca7557d52c3bdc8
	host: 'localhost',
	dialect: "mysql",
	define: {
			timestamps: false
	}
});

module.exports.connection = connection;