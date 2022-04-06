import mongoose from "mongoose";

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DATABASE =
  process.env.GENSHIN_PROD || "mongodb://127.0.0.1:27017/genshin-api";

mongoose.set("returnOriginal", false);

mongoose
  .connect(DATABASE)
  .catch((error) =>
    console.error("Error, could not connect to Mongdb ", error.mesage)
  );

mongoose.connection.on("disconnected", () => console.log("Disconnected"));

mongoose.connection.on("error", (error) =>
  console.error(`MongoDB could not connect: ${error}`)
);

export default mongoose.connection;
