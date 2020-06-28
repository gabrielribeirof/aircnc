import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/multer';

import AuthMiddleware from './middlewares/AuthMiddleware';

import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';
import SpotController from './controllers/SpotController';
import BookingController from './controllers/BookingController';
import ApprovalController from './controllers/ApprovalController';
import RejectionController from './controllers/RejectionController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/login', SessionController.show);
routes.post('/users', UserController.store);

routes.use(AuthMiddleware);

routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);
routes.delete('/users', UserController.delete);

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

export default routes;
