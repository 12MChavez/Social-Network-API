// const { User, Thought } = require("../models");
import userSchema from "../models/User.js";
const userFunctions = {
  // getUsers gets all users
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // getOneUser gets one user
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // createUser creates a user
  createUser(req, res) {
    User.create(req.body)
      .then((newUserData) => {
        res.json(newUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // updateUser updates a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "user id not found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // deleteUser deletes a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: "user id not found" });
        }

        //start work here
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // getFriends gets all of one user's friends
  getFriends(req, res) {
    console.log("getFriends called");
  },
  // addOneFriend adds one friend to user
  addOneFriend(req, res) {
    console.log("addOneFriend called");
  },
  // deleteOneFriend deletes one friend from user
  deleteOneFriend(req, res) {
    console.log("deleteOneFriend called");
  },
};

export default userFunctions;
