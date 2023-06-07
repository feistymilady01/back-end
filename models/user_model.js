const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect('mongodb+srv://pricelessblinks:kWvli4UJegEZRVZq@cluster0.y6txql3.mongodb.net/');
const Schema = mongoose.Schema;

const user_Schema = new Schema({
  first_name: String,
  last_name: String,
  age: String,
  phone_number: String,
  email: { type: String, unique:true, dropDups:true },
  password: String,
}, { timestamps: {} }
);

module.exports = mongoose.model("user", user_Schema);
