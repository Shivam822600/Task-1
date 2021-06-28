var express = require('express');
var router = express.Router();
var pool = require('./pool')
var upload=require('./multer')

/* GET home page. */


router.post('/adddata',upload.any(), function(req, res, next) {

    pool.query("insert into signup (name,emailid,password)values(?,?,?)",
    [
        req.body.name,
        req.body.emailid,
        req.body.password,
    ],
    function(error,result){
       console.log(req.body)
        if(error)
        {console.log(error)
            res.status(500).json({result:false})
        }
        else
        {
            console.log(result)
            res.status(200).json({result:true})
        }
    })
  
});

  
router.get('/displayall',function(req,res) {

  pool.query("select * from signup",function(error,result){
    
      if(error)
      {
          res.status(500).json([])
      }
      else
      {
         
          res.status(200).json(result)
      }
  })
});
  




  module.exports = router;
  