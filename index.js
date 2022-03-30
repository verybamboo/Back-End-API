import db from "./database/connection.js";
import routes from "./routes/index.js";

import express from "express";
import cors from "cors";
import logger from "morgan";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/", routes);

db.on("connected", () => {
  console.clear();
  console.log("Connected");
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(
          `Express server is running in development on: http://localhost:${PORT}`
        );
  });
});
