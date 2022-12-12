import React, { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import './style.css'

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
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts