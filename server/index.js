const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const db1 = require('./queries_tier_1')
const db2 = require('./queries_tier_2')
var cors = require('cors')

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ["POTATO"],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
 
app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// const user_id = req.session.user_id

// app.get('/', (req, res) => {
//   res.json({ info: 'Node.js, Express, and Postgres API' })
// })
//login
app.post('/login', async (req, res) => {
  const user = await db2.userVerification(req.body.email, req.body.password)
  req.session.user_id = user.id
  console.log('/LOGIN HIT')
  res.json({status: 'ok'})
})

app.get('/logout',  (req, res) => {
  console.log("/logout, please nuke the session")
  console.log("what is my session?", req.session)
  req.session = null;
  res.json({logout: 'ok'})
})

app.get('/api/home', async (req, res) => {
  const user_id = req.session.user_id
  try {
    const result = await db2.getUsercategories(user_id);
    res.json(result.rows)
  } catch (error) {
    res.status(500).send(error.message);
  }
})
// app.get('/api/home', db1.getCategories)

app.post('/new-user',(req, res) => {
  console.log(req.body)
  let name = req.body.name 
  let email = req.body.email 
  let password_digest= req.body.password_digest
  let created_at=req.body.created_at 
  let budget = req.body.budget
  
  const info = {
    name,
    email,
    password_digest,
    created_at,
    budget,
  }
  db1.addUser(info)
  res.status(200).send(`User`)
})

// app.get('/categories', db1.getCategories)
 

app.post('/new-category',(req, res) => {
  
  const user_id = req.session.user_id
  let name = req.body.name
  let created_at = req.body.created_at
  let category_budget = req.body.category_budget

  const info = {
    name,
    user_id,
    created_at,
    category_budget
  }
 
  db1.addCategory(info)
  res.status(200).send(`Category`)

}) 
// app.get('/transactions', db1.getTransactions)
// app.post('/transactions/:id', db.addTransaction)

app.post('/new-entry', (req, res) =>{
  console.log(req.body)
  let store_name = req.body.store_name
  let category_id = req.body.category_id
  let amount = req.body.amount
  let entered_on = req.body.entered_on
  let description = req.body.description

  const info = {
    store_name,
    category_id,
    amount,
    entered_on,
    description
  }
 
  db1.addTransaction(info)
  res.status(200).send(`Transactions`)
})
 


// app.put('/transactions/:id', db1.editTransaction)
// app.delete('/transactions:id', db1.deleteTransaction)





app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})