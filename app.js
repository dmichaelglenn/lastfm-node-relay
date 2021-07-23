require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => res.send("Yes, I'm here."));

app.listen(port, () => console.log(`Last.FM relay server listening on port ${port}.`));