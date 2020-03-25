//A small module that managess the communications with the MongoDB
const mongoose = require('mongoose')

//Database connection
const dburl = process.env.MONGODBURL
mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})
const Person = mongoose.model('Person', personSchema);

module.exports = Person