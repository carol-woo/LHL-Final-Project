const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})

const getCategories = async (req, res) => {
  await pool.query('SELECT * FROM categories', (error, results) => {
    if (error) {
      throw error
    }
    console.log("getCategories being used in queries.js")
    res.status(200).json(results.rows)
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

module.exports = {getCategories, getTransactions, addTransaction, editTransaction, deleteTransaction}