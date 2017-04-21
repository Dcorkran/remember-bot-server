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
  dbQueries.getDescriptionByName(req.body.name)
  .then((data)=>{
    if (!data.length) {
      return dbQueries.addNewName(req.name,req.description)
    } else {
      return dbQueries.updateDescription(req.name,req.description)
    }
  })
  .then((response)=>{
    res.json('working');
  })
})



module.exports = router;
