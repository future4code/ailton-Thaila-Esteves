import { useState } from 'react'

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const handleInputChange = (event) => {
    const {value, name} = event.target
    setForm({...form, [name]: value})
  }

  const clear = () => {
    setForm(initialState)
  }

  return [form, handleInputChange, clear]
}

 