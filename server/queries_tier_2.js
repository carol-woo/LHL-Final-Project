const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})


const userVerification = async (email, password) => {
 const res =  await pool.query(`
    SELECT * FROM users
    WHERE email=$1 AND password_digest=$2;`,[email,password]);
  return res.rows[0]
}

// const getHouseholdsCategories = async (req, res) => {
//   const householdId = req.params
//   await pool.query(`SELECT * FROM categories join households on households.id = categories.household_id where household_id='1'`, (error, results) => {
//     if (error) {
//       throw error
//     }
//     console.log("getHouseholdCategories being used in queries_tier2.js", results.rows)
//     res.status(200).json(results.rows)
//   })
// }

getUsercategories = async(user_id) => {
  try {
   let aa = await pool.query(`SELECT categories.* FROM categories join users on categories.user_id = users.id where categories.user_id='1'`);
   console.log(aa.rows);
   return aa;
    // return await pool.query(`SELECT * FROM categories`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {userVerification, getUsercategories}
