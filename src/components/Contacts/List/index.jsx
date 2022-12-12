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

      <ul>
        {filteredContacts.map((contact, index) => (
          <li key={index}>{contact.fullname} - {contact.phone_number}</li>
        ))}
      </ul>
    </div>
  )
}

export default List