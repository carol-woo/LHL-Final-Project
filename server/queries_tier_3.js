const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})

// Returns amount spent along with the day
amountSpentPerDayMonth = async (user_id) => {
  const result = await pool.query(`select sum(amount) as total, extract (day from entered_on) as day from transactions where extract (month from entered_on) = 6 and user_id = $1 group by entered_on`, [user_id]);

  const usersBudget = await pool.query(`select users.budget from users where users.id = $1`, [user_id]);
  const numberOfDays = await pool.query(`select count (distinct transactions.entered_on) as numOfDays  from transactions where transactions.user_id = $1`, [user_id]);
  const monthAverageBudget = (usersBudget.rows[0].budget) / (numberOfDays.rows[0].numofdays);
  console.log("TESTING MONTH", monthAverageBudget)

  const categoryAmountSpentMonth = await pool.query('select categories.name, categories.category_budget, sum(transactions.amount) as total from transactions join categories on categories.id = transactions.category_id where extract(month from entered_on) = 6 and transactions.user_id = $1 group by categories.name, categories.category_budget', [user_id]);


  let payload = {
    dailyTotalTransactions: result.rows,
    average: monthAverageBudget,
    totalCategorySpentMonth: categoryAmountSpentMonth.rows
  };
    return payload;
}
      
module.exports = {amountSpentPerDayMonth}