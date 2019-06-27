import express from 'express';
import loginController from '../../controllers/login.controller';
import verifyController from '../../controllers/verify.controller';

const router = express.Router();

router.post('/login', loginController);
router.get('/verify', verifyController);

export default router;
