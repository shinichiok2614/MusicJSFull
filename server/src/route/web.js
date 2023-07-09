import express from 'express';
import homeController from '../controllers/homeController';
let router = express.Router();
let initWebRouter = (app) => {
	// router.get('/', (req, res) => {
	// 	return res.send('Hello world with Eric');
	// });
	router.get('/', homeController.getHomePage);
	// router.get('/about', homeController.getAboutPage);
	return app.use('/', router);
};
module.exports = initWebRouter;
