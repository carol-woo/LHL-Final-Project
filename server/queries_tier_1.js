const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})

const addUser = async (info) => {
  await pool.query(`
  INSERT INTO users(name, email, password_digest, created_at, budget)
  VALUES ($1, $2, $3, $4, $5)`, [info.name, info.email, info.password_digest, info.created_at, info.budget])
}

const getCategories = async () => {
  try {
    const returnData = await pool.query('SELECT * FROM categories');
    console.log("TESTING ROUTE", returnData.rows)
    return returnData.rows
  } catch (error) {
    console.error(error)
  }
}


const addCategory = async (info) => {
  const {name, created_at} = req.body
  await pool.query(`INSERT INTO categories(name, user_id, created_at, catergory_budget)
  VALUES ($1, $2, $3, $4)`, [info.name, info.user_id, info.created_at, info.category_budget])
  console.log("addCategory being used in queries.js")
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

const addTransaction = async (info) => {
  console.log("addTransaction QUERY IS RUNNING!!")
  await pool.query(`
  INSERT INTO transactions (store_name, category_id, amount, entered_on, description)
  VALUES ($1, $2, $3, $4, $5)`, [info.store_name, info.category_id, info.amount, info.entered_on, info.description])
  }


const editTransaction = async (info) => {
  console.log("editTransaction is running!")
  await pool.query(`
  UPDATE transactions (id, store_name, category_id, amount, entered_on, description)
  VALUES ($1, $2, $3, $4, $5, $6)`, [info.id, info.store_name, info.category_id, info.amount, info.entered_on, info.description])
  }

// const deleteTransaction = async (req, res) => {
//  const transaction_id = parseInt(req.params.id)
//   await pool.query(`DELETE FROM transactions WHERE id = $1`, [transaction_id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     console.log("deleteTransaction being used in queries.js")
//     res.status(200).send(`Transaction deleted`)
//   })
// }


module.exports = {addUser, addTransaction, getTransactions, addCategory, editTransaction}
