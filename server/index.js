const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const LeagueJs = require("leaguejs");

const app = express();

app
  .use(cors())
  .use(morgan('combined'));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3001);
