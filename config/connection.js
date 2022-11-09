import mongoose from "mongoose";

const connectionStr =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialmedia";

mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
export default db;
