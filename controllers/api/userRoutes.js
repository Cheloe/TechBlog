const router = require('express').Router();
const { User } = require('../../models');

// POST create a user
// POST login a user
router.get('/', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;