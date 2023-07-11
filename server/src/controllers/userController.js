const userService = require('../services/userService');

let handleLogin = async (req, res) => {
	let password = req.body.password;
	let email = req.body.email;

	if (!email || !password) {
		return res.status(500).json({
			errCode: 1,
			message: 'Missing input parameters',
		});
	}
	let userData = await userService.handleUserLogin(email, password);
	return res.status(200).json({
		// errCode: 0,
		// message: 'hello world in handleLogin',
		// email: email,
		// password: password,
		userData,
	});
};
module.exports = {
	handleLogin: handleLogin,
};
