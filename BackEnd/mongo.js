//A small command line testing utility for the mongo database.
const mongoose = require('mongoose')

const arguments = process.argv.length
if (arguments !== 2 && arguments !== 4){
  console.log("Please provide 0 or 2 arguments")
  return
}

//Setting up the database connection.
const url = process.env.MONGODBURL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})
const Person = mongoose.model('Person', personSchema);

//Print the database contents if no arguments given.
if (arguments === 2){
  Person
    .find({})
    .then(persons => {
      console.log("Directory contents:")
      persons.forEach(person => console.log(`${person.name} ${person.number}`))
      mongoose.connection.close()
    })
    .catch(error => {
      console.log(error)
      mongoose.connection.close()
    })
}
else { //Add the given person to the directory if 2 arguments were given.
  const newName = process.argv[2]
  const newNumber = process.argv[3]
  console.log(`Adding person ${newName} with number ${newNumber} to the directory..`)
  const newPerson = Person({
    name: newName,
    number: newNumber
  })
  newPerson
    .save()
    .then(response => {
      console.log(`Success, bye!`)
      mongoose.connection.close()
    })
    .catch(error => {
      console.log(error)
      mongoose.connection.close()
    })
}