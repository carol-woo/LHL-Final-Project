const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})


const userVerification = async (email,  password) => {
  const res =  await pool.query(`
  SELECT * FROM users
  WHERE email=$1 AND password_digest=$2;`,[email,password]);
  return res.rows[0]
}

const getMonthAverageBudget = async (month, year) => {
  const monthAverageBudget = await pool.query(`select avg(transactions.amount) as average from transactions
  where extract (month from entered_on) = $1 and extract (year from entered_on) = $2`, [month, year])
  console.log ("Testing the avg query", monthAverageBudget);
  return monthAverageBudget;
}

getUsercategories = async(user_id) => {
  try {
    let aa = await pool.query(`
    SELECT categories.id, categories.name, categories.category_budget,  SUM(transactions.amount)
    FROM categories  
    JOIN users ON categories.user_id = users.id 
    LEFT JOIN transactions ON categories.id = transactions.category_id
    WHERE categories.user_id=${user_id}
    GROUP BY categories.id, categories.name, categories.category_budget;
    `);
    console.log("I AM ROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWS",aa.rows);
    return aa;
  } catch (error) {
    console.error(error);
  }
}

// getCategoriesAmount = async() => {
  //   try {
    //    let aa = await pool.query(`select sum(transactions.amount), category_id from transactions group by category_id;`);
    //    console.log(aa.rows);
    //    return aa;
    //   } catch (error) {
      //     console.error(error);
      //   }
      // }
      
      getCategoryTransactions = async(category_id) => {
        try {
          let transactions = await pool.query(`
          select *, transactions.id as transaction_id from transactions 
          join categories on categories.id = category_id 
          where category_id = ${category_id};`);
          console.log("TESTING TRA", transactions)
          return transactions;
          // return await pool.query(`SELECT * FROM categories`);
        } catch (error) {
          console.error(error);
        }
      }
      
      module.exports = {getMonthAverageBudget}
      
      // select budget, expenditure, (budget - expenditure) as balance from (select category_budget as budget, transactions.amount as expenditure
      //   from categories
      //   join transactions on categories.id = transactions.category_id) as difference
      
      
      //   select users_budget, amount_spent, (users_budget - amount_spent) as balance from (select users.budget as users_budget, sum(transactions.amount) as amount_spent from transactions
      // join users on users.id = transactions.user_id group by users.id) as total_expenditure