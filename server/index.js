const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const db1 = require('./queries_tier_1')
const db2 = require('./queries_tier_2')
const db3 = require('./queries_tier_3')
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
  // console.log("what is my session?", req.session)
  req.session = null;
  res.json({logout: 'ok'});
})

app.get('/api/home', async (req, res) => {
  const user_id = req.session.user_id;
  try {
    const result = await db2.getUsercategories(user_id);
    console.log("TESTING this thing", result.rows)
    res.json(result.rows)
  } catch (error) {
    res.status(500).send(error.message);
  }
})

app.get('/api/monthly-view', async (req, res) => {
  console.log("monthly view route is hit")
  const user_id = req.session.user_id;
  try {
    const payload = await db3.amountSpentPerDayMonth()
    console.log("Checking the result in db3. It is working")
    res.json(payload)
  } catch (error) {
    console.log("Error in index.js monthly view route")
    res.status(500).send(error.message);
  }
})

// app.get('/api/amounts', async (req, res) => {
//   try {
//     const result = await db2.getCategoriesAmount();
//     res.json(result.rows)
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// })
// app.get('/api/home', db1.getCategories)

app.post('/new-user', async (req, res) => {
  console.log('new user in index.js')
  let name = req.body.name 
  let email = req.body.email 
  let password_digest= req.body.password_digest
  // let created_at=req.body.created_at 
  let budget = req.body.budget
  
  const info = {
    name,
    email,
    password_digest,
    // created_at,
    budget
  }
  try {
    await db1.addUser(info)
    res.status(200).send(`User`)
  } catch (error) {
    res.status(500).send("ERROR");
    console.log(error)
  }
})

app.get('/api/new-category', async (req, res) => {
  const user_id = req.session.user_id;
  console.log("TESTNG", user_id)
  try{
    const result = await db1.getCategories();
    res.status(200).json(result)
    return result;
  } catch (error) {
    console.log("Error in index.js! Get Categories function")
    console.log(error)
  }
})
 

app.post('/api/new-category',async (req, res) => {
  console.log("I AM REQ BODYYYYYYYYYYYYYYYYYYYYYYYYYY", req.body)
  let name = req.body.name
  const user_id = req.session.user_id
  let category_budget = req.body.categoryBudget

  const info = {
    name,
    user_id,
    category_budget
  }
 
  try {
    await db1.addCategory(info)
    res.status(200).send(`Category`)
  } catch (error) {
    res.status(500).send("ERROR");
    console.log(error)
  }
   console.log("new-category in index.js",info)
}) 


app.get('/api/transactions', db1.getTransactions)
// Added the user id to transaction
app.post('/new-entry', (req, res) =>{
  console.log("new entry in index.js")
  let store_name = req.body.store_name
  let user_id = req.session.user_id
  let category_id = req.body.category_id
  let amount = req.body.amount
  let entered_on = req.body.entered_on
  let description = req.body.description

  const info = {
    store_name,
    user_id,
    category_id,
    amount,
    entered_on,
    description
  }
 
  db1.addTransaction(info)
  res.status(200).send(`Transactions`)
})
 

// Added user_id
app.post('/api/transactions',(req,res) =>{
  console.log("transactions in index.js")
  
  let store_name = req.body.store_name
  let user_id = req.session.user_id
  let amount = req.body.amount
  let entered_on = req.body.entered_on
  let description = req.body.description
  let category_id = req.body.category_id
  let id = req.body.id


  const info = {
    store_name,
    user_id,
    amount,
    entered_on,
    description,
    category_id,
    id,
  }

  db1.editTransaction(info)
  console.log("edit transactions in index.js")
  res.status(200).send(`Edited transactions`)
}) 

app.delete('/api/transactions', (req, res) => {
  console.log("delete transaction in index.js", req.body)
 let id = req.body.id
 
  db1.deleteTransaction(id)
  res.status(200).send(`Transaction deleted`)

})

app.post('/api/home', async (req, res) => {
  const category_id = req.body.deleteCategoryId;
  const user_id = req.session.user_id;
  const info = {
    category_id,
    user_id
  }
  console.log("delete category in index.js", info)
  try {
    await db1.deleteCategory(info)
    res.status(200).send(`Transaction deleted`)
  } catch (error) {
    res.status(500).send("Error")
    console.log(error)
  }
})


app.get('/categories-transactions/:id', async (req,res) => {
  console.log("DO IT HERE")
  console.log("CAT ID IS", req.params.id)
  let id = Number(req.params.id)
  let data = await db2.getCategoryTransactions(id)
  console.log(data.rows)
  res.json({data: data.rows})
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})