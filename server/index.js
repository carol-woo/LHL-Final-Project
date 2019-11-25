const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const db = require('./queries')
var cors = require('cors')
 
app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/categories', db.getCategories)
app.post('/new-category/:id', db.addCategory)
app.get('/transactions', db.getTransactions)
// app.post('/transactions/:id', db.addTransaction)
app.post('/new-entry', db.addTransaction)
app.put('/transactions/:id', db.editTransaction)
app.delete('/transactions:id', db.deleteTransaction)




app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})