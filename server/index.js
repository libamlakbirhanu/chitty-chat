const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/auth"));

app.listen(PORT, () => console.log("server running on port: ", PORT));
