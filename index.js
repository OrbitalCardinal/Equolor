const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

// Routes
const homeRoute = require('./routes/home');

// Express App
const app = express();

// Template engine config
app.engine('hbs', expressHbs({layoutsDir: './views/layouts', defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views')

// Static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);

app.use((req,res,next) => {
    res.render('404', {layout: false});
});

app.listen(3000);