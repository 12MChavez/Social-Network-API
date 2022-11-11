import Thought from "../models/Thought.js";
const thoughtsFunctions = {
  // getThoughts gets all thoughts
  getThoughts(req, res) {
    Thought.find()
      .select("-__v")
      .then((data) => {
        if (data.length === 0) {
          return res
            .status(404)
            .json({ message: "currently not thoughts have been added" });
        }
        res.json(data);
      });
  },
  // getOneThought gets one thought
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .populate("reactions")
      .then((data) => {
        if (data.length === 0) {
          return res.status(404).json({ message: "thought id not found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // createThought creates a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((newThought) => {
        if (newThought.length === 0) {
          return res.status(404).json({
            message:
              "thought data not complete: username and a string of 1 to 280 characters are required",
          });
        }
        res.json(newThought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // updateThought updates a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
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
          return res.status(404).json({ message: "thought id not found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // deleteThought deletes a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId }, { new: true })
      .then((thoughtData) => {
        if (thoughtData.length === 0) {
          return res.status(404).json({ message: "thought id not found" });
        }

        //start work here
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // addReaction adds a reaction to a thought
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
      .then((data) => {
        console.log(data, "95");
        if (!data) {
          return res.status(404).json({ message: "thought id not found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // deleteReaction deletes a reaction from a thought
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      //pass the optional new option set to true to return the modified array, rather than the original
      { $pull: { reactions: req.params.thoughtId } },
      { new: true }
    )
      .then((data) => {
        if (data === null) {
          return res.status(404).json({ message: "thought id not found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

export default thoughtsFunctions;
