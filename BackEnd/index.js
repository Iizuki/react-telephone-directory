const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Person = require('./modules/mongooseDB')

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())
//Deliver react frontend
app.use(express.static('../FrontEnd/build'))


//Route for handling whole collection requests
app.get('/api/persons', (req, res) => {
  Person
    .find({})
    .then(people => people.map(formatPerson))
    .then(formattedPeople => res.json(formattedPeople))
    .catch(error => {
      console.log(error)
      response.status(404).end()
    })
})


//Route for handling single person requests
app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id 
  Person
    .findById(id)
    .then(formatPerson)
    .then(foundAndFormattedPerson => response.json(foundAndFormattedPerson))
    .catch(error => {
      console.log(error)
      response.status(404).end()
    })
})


//Route for handling the removal of individual persons
app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  Person
    .findByIdAndRemove(id)
    .then(result => response.status(204).end())
    .catch(error => {
      console.log(error)
      response.status(400).end()
    })
})


//Route handling the addition of new persons
app.post('/api/persons', (request, response) => {
  const body = request.body

  //Return error if the conditions aren't met
  if (!body.name) {
    return response.status(400).json({error: 'name missing'})
  }
  else if (!body.number){
    return response.status(400).json({error: 'number missing'})
  }

  const newPerson = new Person({
    name: body.name,
    number: body.number,
  })

  //Saving the person to DB
  newPerson
    .save()
    .then(formatPerson)
    .then(savedAndFormattedPerson => response.json(savedAndFormattedPerson))
    .catch(error => console.log(error))
})

//Trims a bit the object returned by the mongoDB
const formatPerson = person => {
  return {
    name: person.name,
    number: person.number,
    id: person._id
  }
}

//Starting the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})