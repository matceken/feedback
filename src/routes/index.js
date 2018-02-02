var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.json([
        {
            id:1,
            message:"Hello Ionic1"
        }, 
        
        {
            id:2,
            message:"Muzaffer"
        }

    ])
});

module.exports = router;