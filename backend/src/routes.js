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

routes.use(AuthMiddleware);

routes.get('/users/:user_id', UserController.show);

routes.get('/spots', SpotController.index);
routes.get('/spots/:spot_id', SpotController.show);
routes.post('/spots', upload.single('file'), SpotController.store);
routes.delete('/spots/:spot_id', SpotController.delete);

routes.get('/bookings', BookingController.index);
routes.post('/bookings', BookingController.store);
routes.delete('/bookings/:booking_id', BookingController.delete);

routes.post('/bookings/:booking_id/approve', ApprovalController.store);
routes.post('/bookings/:booking_id/reject', RejectionController.store);

module.exports = routes;
