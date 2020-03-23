const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect(
  'mongodb+srv://michell:123@cluster0-j8xmv.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
//app.use(cors({ origin: 'http://localhost:3000' }))
app.use(cors())
app.use(express.json())
app.use(routes)

const port = 3333
app.listen(port, () => {
  console.log(`Logado na porta: ${port}`)
})
