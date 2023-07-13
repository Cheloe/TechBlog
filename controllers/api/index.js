const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes.js');

router.use('/login', userRoutes);
router.use('/signup', userRoutes);
router.use('/dashboard', postRoutes);

module.exports = router;