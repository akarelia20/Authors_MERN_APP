const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Author name is required'],
      minlength: [3, 'Name must be atleast 3 characters long']
    }
  },
  {
    timestamps: true
  }
)

// creating a model
const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author
