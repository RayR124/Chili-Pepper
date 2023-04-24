require("dotenv").config();
const express = require("express");
const { engine } = require('express-handlebars');
const cookieParser = require("cookie-parser");
const axios = require('axios');

const sequelize = require('./config/connection')

const mainRouter = require ("./controllers")

const app = express();

const PORT = process.env.PORT || 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(cookieParser());

app.use(mainRouter);
app.use(express.static('public'));

sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () =>{
    console.log("Listening on http://localhost:" + PORT);
    });
});