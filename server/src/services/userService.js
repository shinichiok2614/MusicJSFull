const db = require('../models');

let handleUserLogin = (email, password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let userData = {};
			let isEmailExist = await checkUserEmail(email);
			if (isEmailExist) {
				console.log('email exist');
				userData.errCode = 0;
				userData.message = `Your's email is exist`;
				resolve(userData);
			} else {
				console.log('email not exist');
				userData.errCode = 1;
				userData.message = `Your's email is not exist`;
				resolve(userData);
			}
		} catch (e) {
			reject(e);
		}
	});
};
let checkUserEmail = (userEmail) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await db.User.findOne({
				where: { email: userEmail },
			});
			if (user) {
				resolve(true);
			} else {
				resolve(false);
			}
		} catch (e) {
			reject(e);
		}
	});
};
module.exports = {
	handleUserLogin: handleUserLogin,
};
