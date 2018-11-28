const routes = require('express').Router();
const LeagueJs = require('leaguejs');
require('dotenv').config();

const leagueJs = new LeagueJs(process.env.API_KEY, { platform_id: process.env.PLATFORM_ID });
/**
 * Gets a list of matches. By default only the 10 latest will be retrived.
 * This is to help throttle a little, it's also possible to pass a start and end
 * to increase this amount, or to create pagination.
 *
 * @param { int } user account ID
 * @param { int } (optional) start index
 * @param { int } (optional) end index
 */
routes.get('/:accountId/:start?/:end?', async (req, res) => {
  try {
    let startIndex = 0;
    let endIndex = 10;
    if (req.params.start && req.params.end) {
      startIndex = req.params.start;
      endIndex = req.params.end;
    }

    const matches = await leagueJs.Match.gettingListByAccount(
      req.params.accountId,
      {
        beginIndex: startIndex,
        endIndex,
      },
    );
    res.status(200).json(matches);
  } catch (err) {
    res.status(400).send(err.response.body);
  }
});

module.exports = routes;
