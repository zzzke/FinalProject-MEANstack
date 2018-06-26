var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('landing');
// });


router.get('/auth/facebook',passport.authenticate('facebook', {scope: ['email','public_profile']}));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', (req,res) =>{
        res.redirect("https://localhost:4200/movies");
    }));


// router.get('/profile', function(req, res){
//     res.render('profile', { user: req.user });
// });


// // show login form
// router.get("/login",function(req, res) {
//     res.render("login");
// });

// router.get('/logout', function(req, res){
//     req.logout();
//     res.redirect('/');
// });

//
// function isLoggedIn(req, res, next) {
//     if(req.isAuthenticated()){
//         return next();
//     }
//
//     res.redirect('/login');
// }

module.exports = router;
