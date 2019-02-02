const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");
//used postman

//get a list of ninjas from the db
router.get("/ninjas", function(req, res, next){
    // Ninja.find({}).then(function(ninjas){
    //     res.send(ninjas);
    // });
    Ninja.geoNear(
        {type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
        ).then(function(ninjas){
            res.send(ninjas);
        });
});

//add a new ninja to the db
router.post("/ninjas", function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
      res.send(ninja);
    }).catch(next);
});

//update a ninja in the db
router.put("/ninjas/:id", function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
       
    });
    
});

//delete a ninja from the db
router.delete("/ninjas/:id", function(req, res, next){
   Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
       res.send(ninja);
   });
    res.send({type: "DELETE"});
});

module.exports = router;


// const express = require ('express');
// const router = express.Router();

// // get a list of ninjas from the db
// router.get('/ninjas', function(req, res){
//     res.send({type: 'GET'});
// });

// // add a new ninja to the db
// router.post('/ninjas', function(req, res){
//     res.send({type: 'POST'});
// });

// // update a ninja in the db
// router.put('/ninjas/:id', function(req, res){
//     res.send({type: 'PUT'});
// });

// // delete a ninja from the db
// router.delete('/ninjas/:id', function(req, res){
//     res.send({type: 'DELETE'});
// });

// module.exports = router;