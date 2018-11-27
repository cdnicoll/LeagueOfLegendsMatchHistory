const routes = require('express').Router();
const LeagueJs = require("leaguejs");
const { LOL_API_KEY, PLATFORM_ID } = require("../config.json");

const leagueJs = new LeagueJs(LOL_API_KEY, { PLATFORM_ID });

/**
 * Gets a summoner by name
 *
 * @param { String } name
 */
routes.get('/:name', async (req, res) => {
    try {
        const summoner = await leagueJs.Summoner.gettingByName(req.params.name);
        res.status(200).json(summoner);
      } catch (err) {
        res.status(400).send(err.response.body);
      }});

module.exports = routes;
