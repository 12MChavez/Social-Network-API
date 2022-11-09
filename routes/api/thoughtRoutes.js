import express from "express";
export const thoughtRouter = express.Router();
import thoughtFunctions from "../../controllers/thoughtController.js";

//get thoughts
thoughtRouter.route("/").get(thoughtFunctions.getThoughts);

//get one thought
thoughtRouter.route("/:thoughtId").get(thoughtFunctions.getOneThought);

//create thought
thoughtRouter
  .route("/")
  .get(thoughtFunctions.getThoughts)
  .post(thoughtFunctions.createThought);

//update thought
thoughtRouter
  .route("/:thoughtId")
  .get(thoughtFunctions.getOneThought)
  .put(thoughtFunctions.updateThought);

//delete thought
thoughtRouter
  .route("/:thoughtId")
  .get(thoughtFunctions.getOneThought)
  .delete(thoughtFunctions.deleteThought);

//add reaction to thought
thoughtRouter.route("/:thoughtId").post(thoughtFunctions.addReaction);

//delete reaction from thought
thoughtRouter.route("/:thoughtId").delete(thoughtFunctions.deleteReaction);

export default thoughtRouter;
