const mongoose = require("mongoose");

const { Schema } = mongoose;
const wordSchema = new Schema({
  word: String,
  appeared: Number,
  en: String,
});


const collection = "new_words";
const WordModel = mongoose.model("Word", wordSchema, collection);


module.exports = WordModel