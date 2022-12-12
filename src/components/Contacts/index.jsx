import React, { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'

const Contacts = () => {

  const [contacts, setContacts] = useState([
    {
      fullname: 'Eylem Az',
      phone_number: '05798489'
    },
    {
      fullname: 'Arda Güler',
      phone_number: '0818490'
    },
    {
      fullname: 'Mert Kabuk',
      phone_number: '08165484'
    },
    {
      fullname: 'Şule Kaptan',
      phone_number: '26594984'
    }
  ])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts