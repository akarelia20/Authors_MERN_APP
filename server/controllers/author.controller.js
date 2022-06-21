const Author = require('../model/author.model')

const getAllAuthors = (req, res) => {
  Author.find({})
    .sort({ name: 'asc' })
    .then(authors => {
      res.json(authors)
    })
    .catch(err =>
      res.status(400).json({
        message: 'something went wrone whilre getting all',
        erroe: err
      })
    )
}

const createAuthor = (req, res) => {
  Author.create(req.body)
    .then(newAuthor => {
      res.json(newAuthor)
    })
    .catch(err =>
      res
        .status(400)
        .json({ message: 'Something went wrong while creating', error: err })
    )
}

const getAuthorById = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then(getOne => {
      res.json(getOne)
    })
    .catch(err => {
      res
        .status(400)
        .json({ message: 'Something went wrong in getOne', error: err })
    })
}

const deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res
        .status(400)
        .json({ message: 'Something went wrong while deleting', error: err })
    })
}

const updateAuthor = (req, res) => {
  Author.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true
  })
    .then(Author => {
      res.json(Author)
    })
    .catch(err => {
      res
        .status(400)
        .json({ message: 'Something went wrong while updating', error: err })
    })
}

module.exports = {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor
}
