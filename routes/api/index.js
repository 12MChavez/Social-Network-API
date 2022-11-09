import express from "express";
export const apiRouter = express.Router();
import userRouter from "./userRoutes.js";
import thoughtRouter from "./thoughtRoutes.js";

apiRouter.use("/userRoutes", userRouter);
apiRouter.use("/thoughtRoutes", thoughtRouter);

export default apiRouter;
