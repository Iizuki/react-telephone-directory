const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())
//Deliver react frontend
app.use(express.static('../FrontEnd/build'))



let persons = [
    {
      "name": "Example Person",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Second Example",
      "number": "050-123456",
      "id": 2
    },
    {
      "name": "My Name",
      "number": "060-123456",
      "id": 3
    },
    {
      "name": "Longer Name",
      "number": "070-123456",
      "id": 4
    }
  ]

//Route for handling whole collection requests
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

//Route for handling single person requests
app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(note => note.id == id)

  if (person) {
    response.json(person)
  }else {
    response.status(404).end()
  }
})

//Route for handling the removal of individual persons
app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id != id)

  response.status(204).end()
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
  else if (persons.find(person => person.name === body.name)) {
    return response.status(400).json({error: 'name must be unique'})
  }

  const newPerson = {
    name: body.name,
    number: body.number,
    id: Math.floor((Math.random() * 1000) + 1)
  }

  persons = persons.concat(newPerson)
  response.json(newPerson)
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
