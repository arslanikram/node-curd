const express = require('express');
const bodyParser = require('body-parser');
const restaurantRoute = require('./routes/restaurant');
const errorController = require('./controllers/error');
const app = express();
const ports = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/restaurants', restaurantRoute);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(5000, () => console.log(`Project is running on port 5000`));