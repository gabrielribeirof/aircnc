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

routes.post('/login', SessionController.create);
routes.post('/users', UserController.store);

routes.get('/users/:user_id', AuthMiddleware, UserController.show);

routes.get('/spots', AuthMiddleware, SpotController.index);
routes.get('/spots/:spot_id', AuthMiddleware, SpotController.show);
routes.post('/spots', AuthMiddleware, upload.single('file'), AuthMiddleware, SpotController.store);
routes.delete('/spots/:spot_id', AuthMiddleware, SpotController.delete);

routes.get('/bookings', AuthMiddleware, BookingController.index);
routes.post('/bookings', AuthMiddleware, BookingController.store);
routes.delete('/bookings/:booking_id', AuthMiddleware, BookingController.delete);

routes.post('/bookings/:booking_id/approve', AuthMiddleware, ApprovalController.store);
routes.post('/bookings/:booking_id/reject', AuthMiddleware, RejectionController.store);

module.exports = routes;
