require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const getSummoner = require('./routes/getSummoner');
const getMatches = require('./routes/getMatches');
const getMatch = require('./routes/getMatch');

const app = express();
const staticFiles = express.static(path.join(__dirname, '../../client/build'));

app
  .use(cors())
  .use(morgan('combined'))
  .use('/getSummoner', getSummoner)
  .use('/getMatches', getMatches)
  .use('/getMatch', getMatch)
  .use(staticFiles);

app.listen(process.env.PORT || 3001, function() {
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env,
  );
});
