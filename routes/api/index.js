import express from "express";
export const apiRouter = express.Router();
import userRouter from "./userRoutes.js";
import thoughtRouter from "./thoughtRoutes.js";

apiRouter.use("/users", userRouter);
apiRouter.use("/thoughts", thoughtRouter);

export default apiRouter;
