const express = require('express');
const router = express.Router();
const {userpostData,usergetData} = require('../controllers/userController');

router.post('/post', userpostData);
router.get('/get', usergetData);

module.exports = router;
