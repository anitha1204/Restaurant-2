const express = require("express");
const connect = require("./common/connection");

const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
connect();

app.use(express.json());
app.use(cors());
app.use(userRoutes);

const port = 8000;

app.listen(port, () => {
  console.log("Server running on port:", port);
});
