require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const app = express();
const port = $PORT;


app.use(cors());

app.get("/", (req, res) => res.send("Yes, I'm here."));

app.get("/userrecent", async (req, res) => {
    try {
        const userName = `${req.query.userName}`;
        const limit = `${req.query.limit}`;
        const reqUrl = `http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&limit=${limit}&api_key=${process.env.LASTFM_KEY}&format=json`;

        const response = await fetch(reqUrl);
        const json = await response.json();

        return res.json({
            success: true,
            json,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

app.listen(port, () => console.log(`Last.FM relay server listening on port ${port}.`));