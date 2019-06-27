import express from 'express';
import oauthRoutes from './oauth/oauth.route';
import userRoutes from './user/user.route';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json('Hello World!'));
router.use(oauthRoutes);
router.use(userRoutes);

export default router;
