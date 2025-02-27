const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const hookJWTStrategy = require('./app/services/passportStrategy');
const useragent = require('express-useragent');
const bodyParser = require('body-parser');

const passport = require('passport');

app.use(useragent.express());
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));

require('./app/services/passportStrategy')(passport);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(passport.initialize());
hookJWTStrategy(passport);

app.all('*', (req, res, next) => {

  req.header("Authorization");
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization ,Accept');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Expose-Headers', 'Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', require('./app/routes/api')(passport));

app.get('/', (req, res) => {
  res.send('backend connected');
});


app.listen(2001, () => {
  console.log('backend connected')
}); 
