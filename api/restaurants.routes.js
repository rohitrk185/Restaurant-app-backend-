import express from 'express'
import RestaurantsCtrlr from './restaurants.controller.js' 
import ReviewsCtrlr from './reviews.controller.js'

const router = express.Router();

router.route('/').get(RestaurantsCtrlr.apiGetRestaurants);
router.route('/id:id').get(RestaurantsCtrlr.apiGetRestaurantById);
router.route('/cuisines').get(RestaurantsCtrlr.apiGetRestaurantCuisines);



router.route('/review')
    .post(ReviewsCtrlr.apiPostReview)
    .put(ReviewsCtrlr.apiUpdateReview)
    .delete(ReviewsCtrlr.apiDeleteReview)

export default router