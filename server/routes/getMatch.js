const routes = require('express').Router();
const LeagueJs = require('leaguejs');
const championData = require('../data/champion.json');
const summonerData = require('../data/summoner.json');
const runesData = require('../data/runesReforged.json');
const itemData = require('../data/item.json');

const { LOL_API_KEY, PLATFORM_ID } = require('../config.json');

const leagueJs = new LeagueJs(LOL_API_KEY, { PLATFORM_ID });

const getStaticData = (dataSet, id) => {
  let data;
  Object.keys(dataSet.data).forEach(obj => {
    if (parseInt(dataSet.data[obj].key, 10) === id) {
      data = dataSet.data[obj];
    }
  });
  return data;
};

const getRune = runeId => {
  return runesData.find(rune => rune.id === runeId);
};

const getCreepScore = creepsPerMinDeltas => {
  let score = 0;
  Object.keys(creepsPerMinDeltas).forEach(creep => {
    score += creepsPerMinDeltas[creep];
  });

  return score;
};

const processMatchStats = (match, accountId) => {
  return new Promise((resolve, reject) => {
    const participantIdentity = match.participantIdentities.find(
      p => p.player.accountId === parseInt(accountId, 10),
    );

    if (!participantIdentity) {
      reject(new Error('No participant was found'));
    }

    const participant = match.participants.find(
      p => p.participantId === participantIdentity.participantId,
    );
    const champion = getStaticData(championData, participant.championId);
    const summonerSpells = [
      getStaticData(summonerData, participant.spell1Id),
      getStaticData(summonerData, participant.spell2Id),
    ];
    const summonerRunes = [
      getRune(participant.stats.perkPrimaryStyle),
      getRune(participant.stats.perkSubStyle),
    ];
    const itemsBought = [
      itemData.data[participant.stats.item1],
      itemData.data[participant.stats.item2],
      itemData.data[participant.stats.item3],
      itemData.data[participant.stats.item4],
      itemData.data[participant.stats.item5],
      itemData.data[participant.stats.item6],
    ];
    const gameDuration = Math.floor(match.gameDuration / 60);
    // @TODO: Not sure if this is the correct formula here? Might need to be substituted out
    const totalCreepScore = getCreepScore(
      participant.timeline.creepsPerMinDeltas,
    );
    const stats = {
      gameId: match.gameId,
      summonerName: participantIdentity.player.summonerName,
      championName: champion.name,
      gameDuration,
      summonerSpells,
      summonerRunes,
      kda: `${participant.stats.kills}/${participant.stats.deaths}/${
        participant.stats.assists
      }`,
      itemsBought,
      championLevel: participant.stats.champLevel,
      totalCreepScore: (totalCreepScore).toFixed(2),
      creepScorePerMinutes: (totalCreepScore / gameDuration).toFixed(2),
      win: participant.stats.win,
    };

    resolve(stats);
  });
};

routes.get('/:gameId/:accountId', async (req, res) => {
  try {
    const { gameId, accountId } = req.params;
    const match = await leagueJs.Match.gettingById(gameId);
    const stats = await processMatchStats(match, accountId);
    res.status(200).json(stats);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = routes;
