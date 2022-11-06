const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getFriends,
  addOneFriend,
  deleteOneFriend,
} = require("../../controllers/userController");

//get users
router.route("/api/users").get(getUsers);

//get one user
router.route("/:userId").get(getOneUser);

//create user
router.route("/api/users").get(getUsers).post(createUser);

//update user
router.route("/:userId").get(getOneUser).put(updateUser);

//delete user
router.route("/:userId").get(getOneUser).delete(deleteUser);

//add friend to user's list
router
  .route("/api/users/:userId/friends/:friendId")
  .get(getOneUser)
  .get(getFriends)
  .post(addOneFriend);

//delete friend from user's list
router
  .route("/api/users/:userId/friends/:friendId")
  .get(getOneUser)
  .get(getFriends)
  .delete(deleteOneFriend);

module.exports = router;
