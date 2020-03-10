import React from 'react';
import Persons from './Persons'
import InputForm from './InputForm'
import Server from './Communication'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Example Name',
          number: '123-456789'}
      ],
      newName: '',
      newNumber: ''
    }
  }

  //Form event handlers keeping the newName and newNumber states up to date.
  handleNewName = (event) => this.setState({newName: event.target.value})
  handleNewNumber = (event) => this.setState({newNumber: event.target.value})

  //Form event handle adding a new person to the list.
  addPerson = (event) => {
    event.preventDefault()
    if (this.preventDuplicate()) return;

    const newPerson = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const nextPersons = this.state.persons.concat(newPerson)

    this.setState({
      persons: nextPersons,
      newName: '',
      newNumber: ''
    })
  }

  //Checks if the added name is a duplicate (two persons can still have same numbers)
  preventDuplicate = () => {
    //boolean
    const duplicate = this.state.persons.map(person => person.name).includes(this.state.newName)
    if (duplicate) {
      alert(`Name '${this.state.newName}' already exists!`)
    }
    return duplicate
  }

  render() {
    return (
      <div>
        <h2>Directory</h2>
        <InputForm
          newName={this.state.newName}
          onNameChange={this.handleNewName}
          newNumber={this.state.newNumber}
          onNumberChange={this.handleNewNumber}
          addPerson={this.addPerson}
        />
        <h2>Numbers</h2>
        <Persons personList={this.state.persons}/>
      </div>
    )
  }
}


export default App