import React from 'react';

//A small component that arranges the list of persons to jsx.
const Persons = ({personList}) => {
    const rows = personList.map(person => <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table> 
    )
  }

  export default Persons