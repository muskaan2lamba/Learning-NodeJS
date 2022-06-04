// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {engine} = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/404')

const app = express();

//To set ejs template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//To set handlebar template engine
// app.engine('hbs', engine({extname:'hbs',layoutsDir: 'views/layouts',defaultLayout: 'main-layout'}));
// app.set('view engine', 'hbs');
// app.set('views', 'views');

//To set pug template engine
// app.set('view engine', 'pug');
// app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.getErrorMessage);

app.listen(3000);
// const server = http.createServer(app)

// server.listen(3000);