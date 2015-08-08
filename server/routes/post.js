var express = require('express');
var router = express.Router();
var path = require('path');
var Structure = require('../models/structure')

router.post("/", function(req, res, next){
    console.log("Post Hit: ", req.body);
    Structure.create(req.body, function(err, post) {
        res.send("Yes.");
    });
});

router.delete('/:id', function(req,res,next){
    Structure.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err){
            console.log("ERROR : ", err);
        }
        res.json(post)
    });
});

router.get("/", function(req, res, next){
    Structure.find(function(err, structure){
        res.json(structure);
    });

});

module.exports = router;