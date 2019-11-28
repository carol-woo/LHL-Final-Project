const Pool = require("pg").Pool;
const pool = new Pool({
  user: "budget",
  host: "localhost",
  database: "finalproject",
  password: "expense",
  port: 5432
});

const addUser = async (info) => {
  await pool.query(`
  INSERT INTO users(name, email, password_digest, budget)
  VALUES ($1, $2, $3, $4, $5)`, [info.name, info.email, info.password_digest, info.budget])
}

const getCategories = async () => {
  try {
    const returnData = await pool.query('SELECT * FROM categories');
    // console.log("TESTING ROUTE", returnData.rows)
    return returnData.rows
  } catch (error) {
    console.error(error)
  }
}


const addCategory = async (info) => {
  await pool.query(`INSERT INTO categories(name, user_id, category_budget)
  VALUES ($1, $2, $3)`, [info.name, info.user_id, info.category_budget])
  console.log("addCategory being used in queries_tier1.js")
  return true;
  }
// };

// const addCategory = async info => {
//   // const {name, created_at} = req.body
//   // const testId = info.category_id;
//   // console.log('HIIII ___--->>',testId)
//   // const category_name = await pool.query(`SELECT name FROM categories WHERE categories.id = $1`, [info.category_id]);
//   // console.log("CATEGORY NAME CAPTURED", category_name)
//   const result = await pool.query(
//     `INSERT INTO categories(name, user_id, category_budget)
//   VALUES ($1, $2, $3)`,
//     [info.name, info.user_id, info.category_budget]
//   );
//   console.log("addCategory being used in queries.js");
//   return result;
// };

const getTransactions = async (req, res) => {
  await pool.query('SELECT * FROM transactions', (error, results) => {
    if (error) {
      throw error
    }
    console.log("getTransactions being used in queries.js")
    res.status(200).json(results.rows)
  })
}

const addTransaction = async info => {
  console.log("addTransaction QUERY IS RUNNING!!");
  await pool.query(
    `
  INSERT INTO transactions (store_name, category_id, amount, entered_on, description)
  VALUES ($1, $2, $3, $4, $5)`,
    [
      info.store_name,
      info.category_id,
      info.amount,
      info.entered_on,
      info.description
    ]
  );
};

const editTransaction = async (info) => {
  console.log("editTransaction is running!")
 try{
  await pool.query(`
  UPDATE transactions 
  SET store_name = $2, category_id = $3, amount = $4, entered_on = $5, description= $6
  WHERE id = $1
  `, [info.id, info.store_name, info.category_id, info.amount, info.entered_on, info.description])
 } catch(error) {
   console.log(error)
 }
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


module.exports = {addUser, getCategories, addTransaction, getTransactions, addCategory, editTransaction}
