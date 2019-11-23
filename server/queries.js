const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})

const getCategories = (req, res) => {
  pool.query('SELECT * FROM categories', (error, results) => {
    console.log("TESTING")
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {getCategories}