var express = require('express');
var router = express.Router();
var request = require('request');
const AMCurl = 'https://api.amctheatres.com/v2/movies/views/now-playing'
const AMCkey = 'AE5867C9-45E4-4C2B-8E15-6301DD907283'

const TMdbKey ='0c8fab1fd8914f00508684ec69b8784f'


/* GET movies listing. */
router.get('/', function(req, res, next) {
    request({
        url : AMCurl,
        headers : {
            'X-AMC-Vendor-Key': AMCkey
        }
    }, function (err,response,body) {
        if(!err && response.statusCode == 200){
            const allMovies = JSON.parse(body);
            //res.render('movies/index',{movies:allMovies});
            res.json(allMovies["_embedded"]);
        }
    });
});

/*Get show movie details */
router.get('/:id',function(req,res, next) {
    request('https://api.themoviedb.org/3/search/movie/?api_key='+TMdbKey+'&query=' + req.params.id, function (err,response,body) {
        if(!err && response.statusCode == 200){
            var detail = JSON.parse(body);
            res.json(detail["results"]);
            //res.send(detail);
           console.log(detail["results"]);
            ///console.log(detail["results"][0]["title"]);
           //res.render('movies/show', {movieDetails: detail});
        }
    });

});

module.exports = router;
