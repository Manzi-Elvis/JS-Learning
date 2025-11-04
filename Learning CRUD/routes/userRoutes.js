const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//CRUD routes
router.post('/' , userController.createUser);
router.get('/' , userController.getUserById);
router.get('/:id' , userController.updateUser);
router.put('/:id', userController.updateUser);
router.delete('/:id' , userController.deleteUser);

module.exports = router;