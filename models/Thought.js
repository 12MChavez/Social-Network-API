import { Schema, Types, SchemaType } from "mongoose";
import reactionSchema from "./Reaction.js";
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAtl: {
      type: Date,
      default: Date.now,
      //add code to reformat timestamp >>> put helper function in utils
      get: (timestamp) => {
        return timestamp;
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

export default thoughtSchema;
