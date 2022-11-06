const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/ThoughtController");

//get thoughts
router.route("/").get(getThoughts);

//get one thought
router.route("/:thoughtId").get(getOneThought);

//create thought
router.route("/").get(getThoughts).post(createThought);

//update thought
router.route("/:thoughtId").get(getOneThought).put(updateThought);

//delete thought
router.route("/:thoughtId").get(getOneThought).delete(deleteThought);

//add reaction to thought
router.route("/:thoughtId").post(addReaction);

//delete reaction from thought
router.route("/:thoughtId").delete(deleteReaction);

module.exports = router;
