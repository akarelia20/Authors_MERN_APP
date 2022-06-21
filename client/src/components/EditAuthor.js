import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const EditAuthor = () => {
  const [name, setName] = useState('')
  const [errors, setErrors] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${id}`)
      .then(res => {
        console.log(res.data)
        setName(res.data.name)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const submitHandler = e => {
    e.preventDefault()
    axios
      .put(`http://localhost:8000/api/author/${id}`, {
        name
      })
      .then(res => {
        console.log(res.data)
        console.log('SUCCESS')
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
          value={name}
          type='text'
          onChange={e => setName(e.target.value)}
        />
        <div>
          <Link to={'/'}>
            <Button className='m-3 btn-secondary'>Cancel</Button>
          </Link>
          <Button type='submit'>Update</Button>
        </div>
      </Form>
    </div>
  )
}

export default EditAuthor
