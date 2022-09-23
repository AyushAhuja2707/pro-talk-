const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");
const { connect } = require("mongoose");
const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const color = require("colors");
// const { errorHandler, notFound } = require("./middleware/errorMiddleware");
// const cors = require("cors");

const app = express();
dotenv.config();
connectDb();

app.use(express.json());
// app.use(cors());

// app.use(notFound);
// app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is running Succesfully");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Started on Portt ${PORT}`.yellow.bold));
