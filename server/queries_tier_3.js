const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})


const getMonthAverageBudget = async (month, year) => {
  const monthAverageBudget = await pool.query(`select avg(transactions.amount) as average from transactions
  where extract (month from entered_on) = $1 and extract (year from entered_on) = $2`, [month, year])
  console.log ("Testing the avg query", monthAverageBudget);
  return monthAverageBudget;
}

const amountSpentPerDayMonth = async (month, user_id) => {
  const amountSpentPerDay = await pool.query(`select sum(amount), entered_on from transactions where extract (month from entered_on) = $1 and user_id = $2 group by entered_on`, [month, user_id])
  console.log("Testing the amountSpentPerDayMonth in queries_tier_3", amountSpentPerDay);
  return amountSpentPerDay;
}

// const amountBudg

// select sum(transactions.amount), category_id, categories.name, categories.category_budget, transactions.user_id from transactions join categories on categories.id = transactions.category_id group by transactions.category_id, categories.name, categories.category_budget, transactions.user_id having transactions.user_id = 1


      
      module.exports = {getMonthAverageBudget, amountSpentPerDayMonth}
      
      // select budget, expenditure, (budget - expenditure) as balance from (select category_budget as budget, transactions.amount as expenditure
      //   from categories
      //   join transactions on categories.id = transactions.category_id) as difference
      
      
      //   select users_budget, amount_spent, (users_budget - amount_spent) as balance from (select users.budget as users_budget, sum(transactions.amount) as amount_spent from transactions
      // join users on users.id = transactions.user_id group by users.id) as total_expenditure