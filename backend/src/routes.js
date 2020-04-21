const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const SpotController = require('./app/controllers/SpotController');
const BookingController = require('./app/controllers/BookingController');
const ApprovalController = require('./app/controllers/ApprovalController');
const RejectionController = require('./app/controllers/RejectionController');

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:user_id', UserController.update);
routes.delete('/users/:user_id', UserController.delete);

routes.get('/spots', SpotController.index);
routes.get('/spots/:spot_id', SpotController.show);
routes.post('/spots', SpotController.store);
routes.put('/spots/:spot_id', SpotController.update);
routes.delete('/spots/:spot_id', SpotController.delete);

routes.get('/bookings', BookingController.index);
routes.get('/bookings/:booking_id', BookingController.show);
routes.post('/bookings', BookingController.store);
routes.put('/bookings/:booking_id', BookingController.update);
routes.delete('/bookings/:booking_id', BookingController.delete);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes;