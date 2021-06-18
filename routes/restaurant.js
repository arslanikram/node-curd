const express = require('express');

const restaurantController = require('../controllers/restaurant');

const router = express.Router();

router.get('/',restaurantController.getAllRestaurants);
router.get('/:id',restaurantController.getRestaurantById);
router.post('/',restaurantController.postRestaurant);
router.put('/', restaurantController.putRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);
router.get('/search/:name',restaurantController.getRestaurantByname);

module.exports = router;