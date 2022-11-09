// const { User, Thought } = require("../models");
import User from "../models/User.js";
const userFunctions = {
  // getUsers gets all users
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then((data) => {
        if (data.length === 0) {
          return res.status(404).json({ message: "currently no users" });
        }
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
      .populate("friends")
      .populate("thoughts")
      .then((data) => {
        if (data.length === 0) {
          return res.status(404).json({ message: "user id not found" });
        }
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
        if (newUserData.length === 0) {
          return res.status(404).json({
            message: "user data not complete: username and email are required",
          });
        }
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
        if (data.length === 0) {
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
    User.findOneAndDelete({ _id: req.params.userId }, { new: true })
      .then((userData) => {
        if (userData.length === 0) {
          return res.status(404).json({ message: "user id not found" });
        }

        //start work here
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // getFriends gets all of one user's friends
  getFriends(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("friends")
      .then((data) => {
        if (!userData) {
          return res.status(404).json({ message: "user id not found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // addOneFriend adds one friend to user
  addOneFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((data) => {
        if (data.length === 0) {
          return res.status(404).json({ message: "user id not found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // deleteOneFriend deletes one friend from user
  deleteOneFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      //pass the optional new option set to true to return the modified array, rather than the original
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((data) => {
        if (data === null) {
          return res.status(404).json({ message: "user id not found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

export default userFunctions;
