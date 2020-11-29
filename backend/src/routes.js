const { Router } = require('express');
const multer = require('multer');

const uploadConfig = require('./config/multer');

const AuthMiddleware = require('./middlewares/AuthMiddleware');

const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const SpotController = require('./controllers/SpotController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/login', SessionController.show);
routes.post('/users', UserController.store);

routes.use(AuthMiddleware);

routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);

routes.get('/spots', SpotController.index);
routes.get('/spots/:spot_id', SpotController.show);
routes.post('/spots', upload.single('file'), SpotController.store);
routes.delete('/spots/:spot_id', SpotController.delete);

routes.get('/bookings', BookingController.index);
routes.get('/bookings/:booking_id', BookingController.show);
routes.post('/bookings', BookingController.store);
routes.delete('/bookings/:booking_id', BookingController.delete);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes;
