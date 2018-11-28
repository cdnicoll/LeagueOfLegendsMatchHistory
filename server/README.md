# Server
## Setup
Copy the  `.env.dist` file over to `.env` and supply an API key. Once done, run `yarn|npm install` and finally `yarn|npm start`

## REST APIs
#### Gets a summoner
```
/getSummoner/:summonerName

curl --request GET \
  --url http://localhost:3000/getSummoner/:summonerName
```

#### Gets a list of matches
```
http://localhost:3001/getMatches/:accountId/:start/:end

curl --request GET \
  --url http://localhost:3001/getMatches/:accountId

curl --request GET \
  --url http://localhost:3001/getMatches/:accountId/:start/:end

```

#### Gets a single match
```
/getMatch/:gameId/:accountId

curl --request GET \
  --url http://localhost:3001/getMatch/:gameId/:accountId
```

## Commands
Before setting up the project, you need a `.env` file with the API and Environment key for LeagueJS

```
# To start up
# which will run nodemon
yarn dev

# Starts the application, registers it with babel
yarn start

# build the application for deployment
yarn build

# Starts the build index for production use
yarn start:prod
```

## Explanation on how it works
* Split off into routes. `/getSummoner/:name`, `getMatches/:accountId/:start?/:end?`, `getMatch/:gameId/:accountId`
* The express application will call upon each of these routes when requested.
- bable-cli is used to build out the application for deployment
- Invokes the leagueJS to retrieve the API
