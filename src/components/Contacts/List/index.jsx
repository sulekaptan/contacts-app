import React, { useState } from 'react'

function List({ contacts }) {

  const [filterText, setFilterText] = useState('')

  const filteredContacts = contacts.filter((contact) => {
    return Object.keys(contact).some(key =>
      contact[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )

  })
  return (
    <div>

      <input placeholder='Filter Contact'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)} />

      <ul className='list'>
        {filteredContacts.map((contact, index) => (
          <li key={index}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
            </li>
        ))}
      </ul>

          <p>Total contacts ({filteredContacts.length})</p>

    </div>
  )
}

export default List