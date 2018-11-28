const routes = require('express').Router();
const LeagueJs = require('leaguejs');

const { API_KEY, PLATFORM_ID } = process.env;
const leagueJs = new LeagueJs(API_KEY, { PLATFORM_ID });
/**
 * Gets a summoner by name
 *
 * @param { String } name
 */
routes.get('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    if (!name.match(/^[0-9a-zA-Z]+$/)) {
      throw new Error('Invalid characters');
    }
    const summoner = await leagueJs.Summoner.gettingByName(name);
    res.status(200).json(summoner);
  } catch (err) {
    res.status(400).send('Error trying to get the summoner');
  }
});

module.exports = routes;
