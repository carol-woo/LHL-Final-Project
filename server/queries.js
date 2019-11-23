const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})

const getCategories = async (req, res) => {
  await pool.query(`SELECT * FROM categories`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {getCategories}