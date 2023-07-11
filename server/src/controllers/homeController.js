const db = require('../models');
const CRUDService = require('../services/CRUDService');

let getHomePage = async (req, res) => {
	try {
		let data = await db.User.findAll();
		console.log(data);
		return res.render('homepage.ejs', {
			data: JSON.stringify(data),
		});
	} catch (error) {
		console.log(error);
	}
};

let getCRUD = (req, res) => {
	res.render('crud.ejs');
};

let postCRUD = async (req, res) => {
	let message = await CRUDService.createNewUser(req.body);
	console.log(message);
	// console.log(req.body);
	return res.send('post homeController');
};

let getListCRUD = async (req, res) => {
	let message = await CRUDService.getAllUser();
	console.log(message);
	return res.send('get list homeController');
};
module.exports = {
	getHomePage: getHomePage,
	getCRUD: getCRUD,
	postCRUD: postCRUD,
	getListCRUD: getListCRUD,
};
