const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})

const addUser = async (req, res) => {

  const {name, email, password, households_id} = request.body
  await pool.query(`INSERT INTO households(name, email, password, households_id)
  VALUES ($1, $2, $3, $4, $5)`, [name, email, password, households_id], (error, results) => {
    if (error) {
      throw error
    }
    console.log("addUser being used in queries.js")
    res.status(200).send(`User`)
  })
}

const getCategories = async (req, res) => {
  await pool.query('SELECT * FROM categories', (error, results) => {
    if (error) {
      throw error
    }
    console.log("getCategories being used in queries.js")
    res.status(200).json(results.rows)
  })
}

const addCategory = async (req, res) => {

  const {name, created_at, icon_image_path} = request.body
  const {households_id} = request.params.id;
  await pool.query(`INSERT INTO categories(store_name, category_id, amount, entered_on, description)
  VALUES (${1}, ${2}, ${3}, ${4}, ${5})`, [name, households_id, created_at, icon_image_path], (error, results) => {
    if (error) {
      throw error
    }
    console.log("addCategory being used in queries.js")
    res.status(200).send(`Category`)
  })
}

const getTransactions = async (req, res) => {
  await pool.query('SELECT * FROM transactions', (error, results) => {
    if (error) {
      throw error
    }
    console.log("getTransactions being used in queries.js")
    res.status(200).json(results.rows)
  })
}

const addTransaction = async (req, res) => {

  const {store_name, amount, entered_on, description} = request.body
  const category_id = parseInt(req.params.id)
  console.log(entered_on)
  await pool.query(`INSERT INTO transactions (store_name, category_id, amount, entered_on, description)
  VALUES (${1}, ${2}, ${3}, ${4}, ${5})`, [store_name, category_id, amount, entered_on, description], (error, results) => {
    if (error) {
      throw error
    }
    console.log("addTransaction being used in queries.js")
    res.status(200).send(`Transactions`)
  })
}

const editTransaction = async (req, res) => {

  const {store_name, amount, entered_on, description} = request.body
  const transaction_id = parseInt(req.params.id)
  await pool.query(`UPDATE transactions (store_name, category_id, amount, entered_on, description)
  VALUES (${1}, ${2}, ${3}, ${4}, ${5})`, [store_name, category_id, amount, entered_on, description], (error, results) => {
    if (error) {
      throw error
    }
    console.log("editTransaction function being used in queries.js")
    res.status(200).send(`Edited transactions`)
  })
}

const deleteTransaction = async (req, res) => {

  const transaction_id = parseInt(req.params.id)
  await pool.query(`DELETE FROM transactions WHERE id = $1`, [transaction_id], (error, results) => {
    if (error) {
      throw error
    }
    console.log("deleteTransaction being used in queries.js")
    res.status(200).send(`Transaction deleted`)
  })
}

module.exports = {getCategories, addCategory, getTransactions, addTransaction, editTransaction, deleteTransaction}