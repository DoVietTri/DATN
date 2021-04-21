const express = require('express');
const authController = require('./../controllers/auth.controller');

const router = express.Router();

router.post('/login', authController.login); //Admin đăng nhập (sẽ tách sau)
router.post('/user-login', authController.userLogin); //Khách hàng thường đăng nhập
router.post('/register', authController.register);
router.get('/verify/:token', authController.verifyEmail);

module.exports = router;
