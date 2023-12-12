const express = require('express');

const router = express.Router();
const User = require('../models/User');
const userController =require('../controllers/userController');
const verfyToken = require('../middleware/verifyToken');


router.get('/',userController.getAllUsers);

router.post('/',userController.createUser);

router.delete('/:id',verfyToken,(req,res)=>{
    userController.deleteUser(req,res)
});

router.put('/:id',verfyToken,(req,res)=>{
    userController.updateUser(req,res)
});

router.get('/:id',userController.singleUser);
module.exports = router;