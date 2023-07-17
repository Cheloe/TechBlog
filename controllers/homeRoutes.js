const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get ('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
        
        res.render('home', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET login page
// router.get('/login', (req, res) => {
//     try {
//         if (req.session.logged_in) {
//         res.redirect('/');
//     }
//     res.redirect('/api/login');
//     res.render('login');
//     } catch (err) {
//     res.status(500).json(err);
// }});
        

module.exports = router;
