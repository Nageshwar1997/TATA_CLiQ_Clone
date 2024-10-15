const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const connectDB = require("./configs/db.config");
const authRouter = require("./routes/customer/auth.routes");
dotenv.config();

const app = express();

app.use(express.json());

app.use(parser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Tata CLiQ API");
});

app.use("/api/auth", authRouter);

app.use((_, res) => {
  res.status(404).send("404 Not Found!");
});

const PORT = process.env.PORT || 5454;
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log("Error: ", error.message || error);
  }
});
