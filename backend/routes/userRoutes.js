
const express = require('express');
const router = express.Router();
const { postUserData, getUserData } = require('../controllers/userController');

router.post('/post', postUserData);
router.get('/get/:email', getUserData);

module.exports = router;