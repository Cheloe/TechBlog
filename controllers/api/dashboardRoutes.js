const router = require('express').Router();
const { User, Post } = require('../../models');

// GET /api/dashboard
router.get('/', async (req, res) => {
    //get posts from logged in user
        try {
            const postData = await Post.findAll({
                where: {
                    user_id: req.session.user_id,
                },
                include: [
                    {
                        model: User,
                        attributes: ['name'],
                    },
                ],
            });
    
            const posts = postData.map((post) => post.get({ plain: true }));
            console.log(posts);
    
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// // POST /api/dashboard
// router.post('/', async (req, res) => {
//     try {
//         const postData = await Post.create({
//             title: req.body.title,
//             content: req.body.content,
//             user_id: req.session.user_id,
//         });
//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });



module.exports = router;