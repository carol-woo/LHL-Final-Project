const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})


// const getMonthAverageBudget = async () => {
//   const monthAverageBudget = await pool.query(`select avg(transactions.amount) as dailyAverage from transactions
//   where extract (month from entered_on) = 6 and extract (year from entered_on) = 2019`)
//   console.log ("Testing the avg query", monthAverageBudget);
//   return monthAverageBudget;
// }
// Returns amount spent per day along with the date
// const amountSpentPerDateMonth = async (month, user_id) => {
//   const amountSpentPerDate = await pool.query(`select sum(amount), entered_on from transactions where extract (month from entered_on) = $1 and user_id = $2 group by entered_on`, [month, user_id])
//   console.log("Testing the amountSpentPerDateMonth in queries_tier_3", amountSpentPerDate);
//   return amountSpentPerDate;
// }

// Returns amount spent along with the day
amountSpentPerDayMonth = async () => {
  const result = await pool.query(`select sum(amount) as total, extract (day from entered_on) as day from transactions where extract (month from entered_on) = 6 and user_id = 2 group by entered_on`);

  const monthAverageBudget = await pool.query(`select avg(transactions.amount) as dailyAverage from transactions
  where extract (month from entered_on) = 6 and extract (year from entered_on) = 2019`);
  // console.log ("Testing the avg query", monthAverageBudget);


  let payload = {
    dailyTotalTransactions: result,
    average: monthAverageBudget
  };
  // console.log("CHECKING SOMETHIGN", payload)

    return payload;
}

// select sum(amount) as total, extract (day from entered_on) as day from transactions where extract (month from entered_on) = 6 and user_id = 2 group by entered_on`


// const amountBudg

// select sum(transactions.amount), category_id, categories.name, categories.category_budget, transactions.user_id from transactions join categories on categories.id = transactions.category_id group by transactions.category_id, categories.name, categories.category_budget, transactions.user_id having transactions.user_id = 1

// const balance


// select date_created, budget, expenditure, (budget - expenditure) as balance from (select category_budget as budget, transactions.amount as expenditure, transactions.entered_on as date_created
//   from categories
//   join transactions on categories.id = transactions.category_id) as difference
//   where extract (month from date_created) = 6

      
      module.exports = {amountSpentPerDayMonth}
      
      // select budget, expenditure, (budget - expenditure) as balance from (select category_budget as budget, transactions.amount as expenditure
      //   from categories
      //   join transactions on categories.id = transactions.category_id) as difference
      
      
      //   select users_budget, amount_spent, (users_budget - amount_spent) as balance from (select users.budget as users_budget, sum(transactions.amount) as amount_spent from transactions
      // join users on users.id = transactions.user_id group by users.id) as total_expenditure