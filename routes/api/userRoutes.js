import express from "express";
export const userRouter = express.Router();
import userFunctions from "../../controllers/userController.js";

//get users
userRouter.route("/api/users").get(userFunctions.getUsers);

//get one user
userRouter.route("/:userId").get(userFunctions.getOneUser);

//create user
userRouter
  .route("/api/users")
  .get(userFunctions.getUsers)
  .post(userFunctions.createUser);

//update user
userRouter
  .route("/:userId")
  .get(userFunctions.getOneUser)
  .put(userFunctions.updateUser);

//delete user
userRouter
  .route("/:userId")
  .get(userFunctions.getOneUser)
  .delete(userFunctions.deleteUser);

//add friend to user's list
userRouter
  .route("/api/users/:userId/friends/:friendId")
  .get(userFunctions.getOneUser)
  .get(userFunctions.getFriends)
  .post(userFunctions.addOneFriend);

//delete friend from user's list
userRouter
  .route("/api/users/:userId/friends/:friendId")
  .get(userFunctions.getOneUser)
  .get(userFunctions.getFriends)
  .delete(userFunctions.deleteOneFriend);

export default userRouter;
