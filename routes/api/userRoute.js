const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// user
router.route('/').get(getUsers).post(createUser);

// user/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;