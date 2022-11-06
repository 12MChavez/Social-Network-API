const { Schema, Types, SchemaType } = require("mongoose");
import isEmail from "validator/lib/isEmail";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    $trim: { input: username, chars: " " },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [isEmail, "Enter a valid email"],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

module.exports = userSchema;