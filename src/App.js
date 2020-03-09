import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Example Name' }
      ],
      newName: ''
    }
  }

  //Form even thandler keeping the newName state up to date.
  handleNewPerson = (event) => {
    this.setState({newName: event.target.value})
  }

  //Form event handle adding a new name to the list.
  addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: this.state.newName
    }
    const nextPersons = this.state.persons.concat(newPerson)

    this.setState({
      persons: nextPersons,
      newName: ''
    })
  }


  render() {
    return (
      <div>
        <h2>Directory</h2>
        <form onSubmit={this.addPerson}>
          <div>
            name: <input 
            value={this.state.newName}
            onChange={this.handleNewPerson}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <Persons personList={this.state.persons}/>
      </div>
    )
  }
}

//A small component that arranges the list of persons to jsx.
const Persons = ({personList}) => {
  const rows = personList.map(person => <p key={person.name}>{person.name}</p>)
    return (
      <ul>
        {rows}
      </ul> 
    )
}

export default App

