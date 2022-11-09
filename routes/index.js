import express from "express";
export const router = express.Router();
import apiRouter from "./api/index.js";

function wrongRoute(req, res) {
  return res.send("try a different route");
}

router.use("/api", apiRouter);
router.use("/", wrongRoute);
export default router;
