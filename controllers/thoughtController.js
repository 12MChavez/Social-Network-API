import thoughtSchema from "../models/Thought.js";
const thoughtsFunctions = {
  // getThoughts gets all thoughts
  getThoughts(req, res) {
    console.log("getThoughts called");
  },
  // getOneThought gets one thought
  getOneThought(req, res) {
    console.log("getOneThought called");
  },
  // createThought creates a thought
  createThought(req, res) {
    console.log("createThought called");
  },
  // updateThought updates a thought
  updateThought(req, res) {
    console.log("updateThought called");
  },
  // deleteThought deletes a thought
  deleteThought(req, res) {
    console.log("deleteThought called");
  },
  // addReaction adds a reaction to a thought
  addReaction(req, res) {
    console.log("addReaction called");
  },
  // deleteReaction deletes a reaction from a thought
  deleteReaction(req, res) {
    console.log("deleteReaction called");
  },
};

export default thoughtsFunctions;
