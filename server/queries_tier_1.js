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
  INSERT INTO users(name, email, password_digest, created_at)
  VALUES ($1, $2, $3, $4, $5)`, [info.name, info.email, info.password_digest, info.created_at, info.budget])
}

// const getCategories = async (req, res) => {
//   await pool.query('SELECT * FROM categories', (error, results) => {
//     if (error) {
//       throw error
//     }
//     console.log("getCategories being used in queries.js", results.rows)
//     res.status(200).json(results.rows)
//   })
// }


// const addCategory = async (req, res) => {
//   const {name, created_at} = req.body
//   // const {household_id} = request.params.id;
//   await pool.query(`INSERT INTO categories(name, household_id, created_at)
//   VALUES ($1, $2, $3)`, [name, household_id, created_at], (error, results) => {
//     if (error) {
//       throw error
//     }
//     console.log("addCategory being used in queries.js")
//     res.status(200).send(`Category`)
//   })
// }

// const getTransactions = async (req, res) => {
//   await pool.query('SELECT * FROM transactions', (error, results) => {
//     if (error) {
//       throw error
//     }
//     console.log("getTransactions being used in queries.js")
//     res.status(200).json(results.rows)
//   })
// }

const addTransaction = async (info) => {
  console.log("addTransaction QUERY IS RUNNING!!")
  await pool.query(`
  INSERT INTO transactions (store_name, category_id, amount, entered_on, description)
  VALUES ($1, $2, $3, $4, $5)`, [info.store_name, info.category_id, info.amount, info.entered_on, info.description])
  }


// const editTransaction = async (req, res) => {
//   const {store_name, amount, entered_on, description} = req.body
//   const transaction_id = parseInt(req.params.id)
//   await pool.query(`UPDATE transactions (store_name, category_id, amount, entered_on, description)
//   VALUES ($1, $2, $3, $4, $5)`, [store_name, category_id, amount, entered_on, description], (error, results) => {
//     if (error) {
//       throw error
//     }
//     console.log("editTransaction function being used in queries.js")
//     res.status(200).send(`Edited transactions`)
//   })
// }

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

// const getHouseholdsCategories = async (req, res) => {
//     console.log("TEST")
//     const result =  await pool.query(`
//        SELECT * FROM categories;`);
//       //   M categories
//       //  join households on households.id = categories.household_id
//       //   where household_id='1';`);
//     //  return res.json(res.rows);
//     console.log(result.rows)
//     return result.rows[0]
//    }


module.exports = {addUser, addTransaction}