import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const ShowAll = () => {
  const navigate = useNavigate()
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/author')
      .then(res => {
        setAuthors(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleDelete = id => {
    axios
      .delete(`http://localhost:8000/api/author/${id}`)
      .then(res => {
        console.log(res.data)
        const fileterd = authors.filter((authors, idx) => {
          return id !== authors._id
        })
        setAuthors(fileterd)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='container w-50 mt-5'>
      <Link to={'/new'}>Add An Author</Link>
      <table className='table mt-4'>
        <thead>
          <tr>
            <th scope='col'>Authors</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td>
                <Button
                  onClick={() => handleDelete(author._id)}
                  variant='outline-danger'
                >
                  Delete
                </Button>
              </td>
              <td>
                <Link to={`/edit/${author._id}`}>
                  <Button variant='outline-secondary'>Update</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowAll
