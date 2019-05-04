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

	return Cafes.create(req.body).then(function (result) {
		if (result) {
			res.send(result);
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
	let sortingKey;

	for(let key in req.body.radioButtons) {
		if(req.body.radioButtons[key] && key !== 'nearYou') {
			sortingKey = key;
		}
	}

	for (let key in filter) {
		if (!filter[key] || key === sortingKey) {
			delete filter[key];
		}
	}
	
	let filterArray = [filter];

	if(sortingKey) {
		filterArray.push({
			[sortingKey]: {
				[Op.gt]: 0
			}
		})
	}

	Cafes.findAll({
		where: {
			[Op.and]: filterArray
		},
		raw: true
	})
	.then((cafes) => {
		if(sortingKey) {
			cafes = cafes.sort((a, b) => parseInt(a[sortingKey]) - parseInt(b[sortingKey]));
		}

		res.send({ data: cafes });
	});
});