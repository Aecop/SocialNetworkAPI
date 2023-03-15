// Import express and db
const express = require('express');
const routes = ('/routes')
const db = require('./config/connection');




//Declare app and PORT
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`SERVER RUNNING ON PORT ${PORT}`);
    });
});

