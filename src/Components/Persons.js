import React from 'react';

//A small component that arranges the list of persons to jsx.
const Persons = ({personList, buttonHandlerFactory}) => {

  const RemoveButton = (person) => {
    return (
      <form onSubmit={buttonHandlerFactory(person)}>
        <button type="submit">remove</button>
      </form>
    )
  }

  const rows = personList.map(person => 
    <tr key={person.id}><td>{person.name}</td><td>{person.number}</td><td>{RemoveButton(person)}</td></tr>
  )

  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table> 
  )
}


export default Persons