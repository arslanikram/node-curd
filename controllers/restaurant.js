const Restaurant = require('../models/restaurant');

exports.getAllRestaurants = async (req, res, next) => {
    try{
        const[allRestaurants] = await Restaurant.fetchAll();
        res.status(200).json(allRestaurants);
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getRestaurantById = async (req, res, next) => {
    try{
        const[getSingleRestaurant] = await Restaurant.fetchRestaurantById(req.params.id);
        res.status(200).json(getSingleRestaurant);
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getRestaurantByname = async (req, res, next) => {
    try{
        const[getSingleRestaurant] = await Restaurant.fetchRestaurantByname(req.params.name);
        res.status(200).json(getSingleRestaurant);
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postRestaurant = async (req, res, next) => {
    try {
        const postResponse = await Restaurant.post(req.body);
        res.status(201).json(postResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.putRestaurant = async (req, res, next) => {
    try {
        const putResponse = await Restaurant.update(req.body.id, req.body);
        res.status(200).json(putResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deleteRestaurant = async (req, res, next) => {
    try {
        const deleteResponse = await Restaurant.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};