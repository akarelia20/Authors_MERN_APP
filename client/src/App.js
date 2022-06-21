import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowAll from './components/ShowAll'
import EditAuthors from './components/EditAuthor'
import NewAuthor from './components/NewAuthor'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App () {
  return (
    <BrowserRouter>
      <div className='container w-75'>
        <h1 className='container text-center mt-3'>Favorite Authors </h1>
        <Routes>
          <Route path='/' element={<ShowAll />} />
          <Route path='/new' element={<NewAuthor />} />
          <Route path='/edit/:id' element={<EditAuthors />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
