const express = require ('express');
const { register,login, getPersonData } = require('../controllers/personControllers');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router= express.Router();
const Person = require('../models/personModel');

//@desc Register a new Person (def role: user)
//@params POST/api/person/Register
//@access PUBLIC
router.post('/register', register);
router.post('/login', login);
router.get('/',authMiddleware, getPersonData);
module.exports= router;