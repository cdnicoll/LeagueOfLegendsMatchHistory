const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const LeagueJs = require("leaguejs");
const { LOL_API_KEY, PLATFORM_ID } = require("./config.json");

const leagueJs = new LeagueJs(LOL_API_KEY, { PLATFORM_ID });
const app = express();

app
  .use(cors())
  .use(morgan('combined'));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3001);
