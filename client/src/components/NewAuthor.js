import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const NewAuthor = () => {
  const [name, setName] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    axios
      .post('http://localhost:8000/api/author', {
        name
      })
      .then(res => {
        console.log(res.data)
        console.log('SUCCESS')
        setName('')
        navigate('/')
      })
      .catch(err => {
        setErrors(err.response.data.error.errors)
        console.log(err.response.data.error.errors)
      })
  }

  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Form onSubmit={submitHandler} className='card mb-5 m-5 p-5'>
        {errors.name ? (
          <p className='text-danger'>{errors.name.message}</p>
        ) : null}
        <label className='mb-0 col-3'>Name:</label>
        <input
          className='form-control'
          onChange={e => setName(e.target.value)}
        />
        <div>
          <Link to={'/'}>
            <Button className='m-3 btn-secondary'>Cancel</Button>
          </Link>
          <Button type='submit'>Submit</Button>
        </div>
      </Form>
    </div>
  )
}

export default NewAuthor
