const router = require('express').Router();
const userRoute = require('./userRoute');
const thoughtsRoute = require('./thoughtsRoute');

//Set up Routes
router.use('/user', userRoute);
router.use('/thought', thoughtsRoute);

module.exports = router;