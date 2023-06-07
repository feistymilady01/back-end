const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
require('dotenv').config({ path: '.env' });
const itemRoutes = require("./routes/item.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
//init express
const app = express();

//Port
const PORT = process.env.PORT || 1111;
//connect to mongodb
const MONGO_URI = process.env.MONGO_URI;
//mongose connect or listens
mongoose.connect(MONGO_URI, { useNewUrlParser: true })

//Middlewear Body parse request of content-type application/JSON
app.use(express.json());

//Middlewear Body parse request of content-type application/x-www-urlencoded-form
app.use(express.urlencoded( { extended:false } ))

app.get("/", (request, response) => {
    return response.send("Kwillox web app has started")
})

//initialise the app routes
authRoutes(app);
itemRoutes(app);
userRoutes(app)

app.listen(PORT, () => {
    console.log(PORT, `Kwillox is listening at port ${PORT}`)
})