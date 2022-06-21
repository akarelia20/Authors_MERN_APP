const mongoose = require('mongoose')
const productDB = 'productDB'

mongoose
  .connect(`mongodb://localhost/${productDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`connected to MongoDB ${productDB}`)
  })
  .catch(err => {
    console.log('DB connection error', err)
  })
