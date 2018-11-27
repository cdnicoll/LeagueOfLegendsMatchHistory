const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const getSummoner = require('./routes/getSummoner');
const getMatches = require('./routes/getMatches');

const app = express();

app
  .use(cors())
  .use(morgan('combined'))
  .use('/getSummoner', getSummoner)
  .use('/getMatches', getMatches);

  app.listen(3001, () => {
    console.log('App listening on port 3001, Lets go!');
  });
