import mongoose from "mongoose";

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const GENSHIN_PROD =
  process.env.GENSHIN_PROD || "mongodb://127.0.0.1:27017/genshin-api";

mongoose.set("returnOriginal", false);

mongoose.connect(
  GENSHIN_PROD,
  mongooseConfig,
  () => console.log(`success connected to the database`),
  (err) => console.log(err)
);

mongoose.connection.on("disconnected", () => console.log("Disconnected"));

mongoose.connection.on("error", (error) =>
  console.error(`MongoDB could not connect: ${error}`)
);

export default mongoose.connection;
