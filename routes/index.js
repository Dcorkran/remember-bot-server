var express = require('express');
var router = express.Router();
var dbQueries = require('../db/queries')

/* GET home page. */
router.get('/:name', function(req, res, next) {
  dbQueries.getDescriptionByName(req.params.name)
  .then((data)=>{
    res.json(data);
  })
});

router.post('/', function(req,res,next){

})



module.exports = router;
