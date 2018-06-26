var express = require('express');
var router = express.Router();
var Post            = require('../models/post');


router.post('/posts',(req, res, next) =>{
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'Post added successfully',
            postId: createdPost._id
        });
    });


});

router.get('/posts', (req, res, next) => {
    Post.find().then(documents => {
        res.status(200).json({
            message: 'posts fetched succfully',
            posts: documents
        });
    });

});

router.delete('/posts/:id',(req,res,next) => {
    Post.deleteOne({ _id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({
            message: "Post deleted"
        })
    })
});

module.exports = router;