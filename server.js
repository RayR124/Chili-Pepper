require("dotenv").config();
const express = require("express");
const { engine } = require('express-handlebars');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const axios = require('axios');

const sequelize = require('./config/connection')

const mainRouter = require("./controllers")

const app = express();

const reviews = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/reviews', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3001/reviews', req.body);
        res.status(200).send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    const review = {
        rating: req.body.rating,
        comment: req.body.comment
    };
    reviews.push(review);
    res.send('Review added!');
});

const PORT = process.env.PORT || 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(cookieParser());

app.use(mainRouter);
app.use(express.static('public'));

app.get('/api/reviews', (req, res) => {
    res.json(reviews);
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log("Server running with the wind on PORT:" + PORT);
    });
});