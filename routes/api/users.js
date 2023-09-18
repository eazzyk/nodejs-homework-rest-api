const express = require('express');

const { schemas } = require('../../models/user');
const { validateBody, authenticate, avatarUpload } = require('../../middlewares');

const ctrl = require('../../controllers/users/index');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.registerUser);

router.post('/login', validateBody(schemas.loginSchema), ctrl.loginUser);

router.get('/current', authenticate, ctrl.getCurrentUser);

router.post('/logout', authenticate, ctrl.logoutUser);

router.patch('/avatars', authenticate, avatarUpload.single('avatar'), ctrl.updateAvatar);

module.exports = router;
