import express from 'express';
import { UserController } from './User.controler';

const router = express.Router();

router.post('/users', UserController.createUser);

router.get('/users', UserController.GetUser);

export const UserRoute = router;
