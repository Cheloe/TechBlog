const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes.js');
const loginRoutes = require('./loginRoutes.js');
const signupRoutes = require('./signupRoutes.js');

router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/dashboard', postRoutes);

module.exports = router;