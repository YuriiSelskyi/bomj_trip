const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000;

const Sequelize = require('sequelize');
const Cafes = require('./model/cafes');
const Op = Sequelize.Op;

app.use(bodyParser.json())

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/add-institution', (req, res) => {
	console.log(req.body);

	return Cafes.create({
		id: req.body.id,
		title: req.body.title
	}).then(function (res) {
		if (users) {
			res.send(res);
		} else {
			res.status(400).send('Error in insert new record');
		}
	});
});

app.post('/get-all-institutions', (req, res) => {

	Cafes.findAll({
		raw: true
	})
	.then((cafes) => {
		res.send({ data: cafes });
	});
});

app.post('/get-filtered-institution', (req, res) => {
	let filter = Object.assign({}, req.body.checkboxButtons, req.body.radioButtons);

	for (let value in filter) {
		if (!filter[value]) {
			delete filter[value];
		}
	}

	Cafes.findAll({
		where: {
			[Op.and]: filter
		},
		raw: true
	})
	.then((cafes) => {
		res.send({ data: cafes });
	});
});