var sequelize = require("sequelize");
var connection = require("../configuration/sequelize").connection;

var cafes = connection.define('cafes', {
	title: {
		type: sequelize.STRING(45),
		allowNull: false
	},
	address: {
		type: sequelize.STRING(255),
		allowNull: false
	},
	actions: {
		type: sequelize.STRING(255),
		allowNull: false
	},
	workingHours: {
		type: sequelize.STRING(45),
		allowNull: false
	},
	discounts: {
		type: sequelize.STRING(45),
		allowNull: true
	},
	wiFi: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	paymentByCard: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	discount: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	vegetarianMenu: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	liveMusic: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	businessLunch: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	alcohol: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	terrace: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	allNight: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	nearYou: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	cheapest: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	popular: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	rating: {
		type: sequelize.TINYINT(1),
		allowNull: false
	},
	photos: {
		type: sequelize.STRING(2000),
		allowNull: true
	}
});

module.exports = cafes;