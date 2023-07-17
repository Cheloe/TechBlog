const router = require('express').Router();
const { User } = require('../../models');

// POST login a user
router.post('/', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;