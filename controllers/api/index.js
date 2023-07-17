const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes.js');
const loginRoutes = require('./loginRoutes.js');
const signupRoutes = require('./signupRoutes.js');

router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;