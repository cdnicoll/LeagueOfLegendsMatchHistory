const routes = require('express').Router();
const LeagueJs = require('leaguejs');
const { LOL_API_KEY, PLATFORM_ID } = require('../config.json');

const leagueJs = new LeagueJs(LOL_API_KEY, { PLATFORM_ID });

routes.get('/getMatch/:gameId/:accountId', async (req, res, next) => {
  try {
    const gameId = req.params.gameId;
    const match = await leagueJs.Match.gettingById(gameId);
    res.status(200).json(match);
  } catch (err) {
    res.status(400).send(err);
  }
});
