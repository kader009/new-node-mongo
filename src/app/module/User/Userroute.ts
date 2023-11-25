import express from 'express';
import { UserController } from './User.controler';

const router = express.Router();

router.post('/users', UserController.createUser);

router.get('/users', UserController.GetUser);

router.put('/users/:userId', UserController.PutUser);

export const UserRoute = router;
