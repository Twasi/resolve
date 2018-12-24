const express = require('express');
const bodyParser = require('body-parser');
const TwitchUser = require('./models/TwitchUser');
const app = express();


const port = typeof process.env.PORT === 'undefined' ? 3000 : process.env.PORT;

require('./database');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/api', require('./controllers'));

app.listen(port, () => {
  console.log('Resolve listening on port ' + port + '...');
});
