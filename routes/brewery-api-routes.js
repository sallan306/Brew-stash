// requiring our models
var db = require("../models");

// also need express
var express = require("express");

// need to route
var router = express.Router();

// routes


    // get route for getting all of the posts
    router.get("/api/breweries", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        // here we need to include the property to option for the findAll query
        db.Brewery.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbBrewery) {
            res.json(dbBrewery);
        });
    });

    // get route for retrieving a single brewery
    router.get("/api/breweries/:id", function(req, res) {
        // here we need to find one brewery
        db.Brewery.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function(dbBrewery) {
            res.json(dbBrewery);
        });
    });

    // POST route for saving a new brewery
    router.post("/api/breweries", function(req, res) {
        db.Brewery.create(req.body).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // POST route for saving a new drink
    // app.post("/api/breweries/drinks", function(req, res) {
    //     db.Drinks.create(req.body).then(function(dbPost) {
    //         res.json(dbPost);
    //     })
    // });
// below always on the bottom ================

module.exports = router;