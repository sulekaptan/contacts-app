import React, { useEffect, useState } from 'react'

const initialFormValues = {fullname: '', phone_number: ''}

function Form({addContact, contacts}) {

    const [form, setForm] = useState(initialFormValues)

    useEffect(()=>{
        setForm(initialFormValues)
    }, [contacts])

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(form.fullname ==="" || form.phone_number ===""){
            return false
        }

        addContact([...contacts, form])

        
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input name='fullname' value={form.fullname} onChange={handleChange} placeholder='Fullname'/>
        </div>
        <div>
             <input name='phone_number' value={form.phone_number} onChange={handleChange} placeholder='Phone Number'/>
        </div>
        <div>
            <button>Save</button>
        </div>
    </form>
  )
}

export default Form