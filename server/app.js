const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const session = require('express-session');


const SequelizeStore = require('connect-session-sequelize')(session.Store);



// const enveloperRouter = require('./routers/envelope_router');
// const categoryRouter = require('./routers/categories_router');
const db = require('./database/db.config');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/api/envelope', enveloperRouter);
// app.use('/api/category', categoryRouter);

const sessionStore = new SequelizeStore({
  db: db,
  checkExpirationInterval: 15 * 60 * 1000,
  expiration: 24 * 60 * 60 * 60 * 1000,
});

app.use(
  session({
    secret: 'keyboard cat',
    store: sessionStore,
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    saveUninitialized: true,
    proxy: true, // if you do SSL outside of node.
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
  })
);

// sessionStore.sync();

const PORT = process.env.PORT;

db.authenticate()
  .then(() => console.log('Connection established successfully'))
  .catch((err) => console.log(`Error ${err}`));

//prueba
app.get('/', (req, res) => {
  if(req.session.viewCount){
    req.session.viewCount++;
  } else {
    req.session.viewCount = 1;
  }
  res.status(200).send('<h1>HELLO you have visited</h1>'+req.session.viewCount);
});

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
