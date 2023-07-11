import bcrypt from 'bcryptjs';
import db from '../models';

let salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let hashPasswordFromBcrypt = await hashUserPassword(data.pword);
			console.log(hashPasswordFromBcrypt);
			await db.User.create({
				firstName: data.fname,
				lastName: data.lname,
				email: hashPasswordFromBcrypt,
			});
			resolve('create success');
		} catch (e) {
			reject(e);
		}
	});
};

let hashUserPassword = (password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let hash = await bcrypt.hashSync(password, salt);
			resolve(hash);
		} catch (e) {
			reject(e);
		}
	});
};
let getAllUser = () => {
	return new Promise(async (resolve, reject) => {
		try {
			let users = await db.User.findAll({
				raw: true,
			});
			resolve(users);
		} catch (e) {
			reject(e);
		}
	});
};
module.exports = {
	createNewUser: createNewUser,
	getAllUser: getAllUser,
};
