const Pool = require("pg").Pool;
const pool = new Pool({
  user: "budget",
  host: "localhost",
  database: "finalproject",
  password: "expense",
  port: 5432
});

const addUser = async info => {
  await pool.query(
    `
  INSERT INTO users(name, email, password_digest, created_at, budget)
  VALUES ($1, $2, $3, $4, $5)`,
    [info.name, info.email, info.password_digest, info.created_at, info.budget]
  );
};

const getCategories = async () => {
  try {
    const returnData = await pool.query("SELECT * FROM categories");
    // console.log("TESTING ROUTE", returnData.rows)
    return returnData.rows;
  } catch (error) {
    console.error(error);
  }
};

const addCategory = async info => {
  // const {name, created_at} = req.body
  // const testId = info.category_id;
  // console.log('HIIII ___--->>',testId)
  // const category_name = await pool.query(`SELECT name FROM categories WHERE categories.id = $1`, [info.category_id]);
  // console.log("CATEGORY NAME CAPTURED", category_name)
    await pool.query(
      `INSERT INTO categories(name, user_id, category_budget)
    VALUES ($1, $2, $3)`,
      [info.name, info.user_id, info.category_budget]
    );
    console.log("addCategory being used in queries.js");
    return true;
  }

const getTransactions = async (req, res) => {
  await pool.query('SELECT * FROM transactions', (error, results) => {
    if (error) {
      throw error
    }
    console.log("getTransactions being used in queries.js")
    console.log("TESTING TIME STAMPE", results.rows)
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
  

const deleteTransaction = async (id) => {
  await pool.query(`DELETE FROM transactions WHERE id = $1`, [id])
  }


  const deleteCategory = async (info) => {
    console.log("deleteCategory in queries_tier_1 is running!")
    console.log("TESTING VALUES", info.category_id, info.user_id)
   try{
    await pool.query(`
    DELETE FROM categories WHERE categories.id = $1 AND categories.user_id = $2; `, [info.category_id, info.user_id])
   } catch(error) {
     console.log(error)
   }
  }



module.exports = {addUser, getCategories, addTransaction, getTransactions, addCategory, editTransaction, deleteTransaction, deleteCategory}
