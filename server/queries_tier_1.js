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
//added user_id
const addTransaction = async info => {
  console.log("addTransaction QUERY IS RUNNING!!");
  await pool.query(
    `
  INSERT INTO transactions (store_name, user_id, category_id, amount, entered_on, description)
  VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      info.store_name,
      info.user_id,
      info.category_id,
      info.amount,
      info.entered_on,
      info.description
    ]
  );
};
// added user_id
const editTransaction = async (info) => {
  console.log("editTransaction is running!")
 try{
  await pool.query(`
  UPDATE transactions 
  SET store_name = $2, user_id = $3 category_id = $4, amount = $5, entered_on = $6, description= $7
  WHERE id = $1
  `, [info.id, info.store_name,info.user_id, info.category_id, info.amount, info.entered_on, info.description])
 } catch(error) {
   console.log(error)
 }
}
  

const deleteTransaction = async (id) => {
  console.log("Deleting transaction in Q2")
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
