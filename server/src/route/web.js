import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';

let router = express.Router();
let initWebRouter = (app) => {
	// router.get('/', (req, res) => {
	// 	return res.send('Hello world with Eric');
	// });
	router.get('/', homeController.getHomePage);
	router.get('/crud', homeController.getCRUD);
	router.post('/post-crud', homeController.postCRUD);
	router.get('/get-list-crud', homeController.getListCRUD);
	router.post('/apis/login', userController.handleLogin);
	return app.use('/', router);
};
module.exports = initWebRouter;
