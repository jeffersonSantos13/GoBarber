import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import Filecontroller from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

/**
 * Routes Userss
 */
routes.put('/users', UserController.update);

/**
 * routes providers
 */
routes.get('/providers', ProviderController.index);

/**
 * Routes Appointments
 */
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

/**
 * Routes Files
 */
routes.post('/files', upload.single('file'), Filecontroller.store);

export default routes;
