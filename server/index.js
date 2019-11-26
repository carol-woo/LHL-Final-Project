const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const db1 = require('./queries_tier_1')
const db2 = require('./queries_tier_2')
var cors = require('cors')
 
app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.get('/', (req, res) => {
//   res.json({ info: 'Node.js, Express, and Postgres API' })
// })
app.post('/new-user', db1.addUser)
app.get('/categories', db1.getCategories)
app.post('/new-category/:id', db1.addCategory)
app.get('/transactions', db1.getTransactions)
// app.post('/transactions/:id', db.addTransaction)
app.post('/new-entry', db1.addTransaction)
app.put('/transactions/:id', db1.editTransaction)
app.delete('/transactions:id', db1.deleteTransaction)

//login
app.post('/login', db2.userVerification)





app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})