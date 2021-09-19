const express = require('express');
require('dotenv').config();
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const cors = require('cors');
const session = require('express-session');
const UserRouter = require('./routers/UserRouter');
const IndexRouter = require('./routers/IndexRouter');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const db = require('./database/db.config');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * ROUTERS
 */
app.use('/users', UserRouter);
app.use('/',IndexRouter);

const sessionStore = new SequelizeStore({
  db: db,
  tableName: 'sessions',
  expiration: 24 * 60 * 60 * 60 * 1000,
});

//HANDLEBARS SETTINGS
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    //partialsDir: path.join(app.get("views"), "partials"),
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');

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

sessionStore.sync();

const PORT = process.env.PORT;

db.authenticate()
  .then(() => console.log('Connection established successfully'))
  .catch((err) => console.log(`Error ${err}`));

//prueba
// app.get('/', (req, res) => {
//   if (req.session.viewCount) {
//     req.session.viewCount++;
//   } else {
//     req.session.viewCount = 1;
//   }
//   res
//     .status(200)
//     .send('<h1>HELLO you have visited</h1>' + req.session.viewCount);
// });


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
