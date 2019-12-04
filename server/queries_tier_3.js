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

  const monthAverageBudget = await pool.query(`select avg(transactions.amount) as dailyAverage from transactions
  where extract (month from entered_on) = 6 and extract (year from entered_on) = 2019 and user_id = $1`, [user_id]);
  // console.log ("Testing the avg query", monthAverageBudget);

  const categoryAmountSpentMonth = await pool.query('select categories.name, categories.category_budget, sum(transactions.amount) as total from transactions join categories on categories.id = transactions.category_id where extract(month from entered_on) = 6 and transactions.user_id = $1 group by categories.name, categories.category_budget', [user_id]);


  let payload = {
    dailyTotalTransactions: result.rows,
    average: monthAverageBudget.rows[0].dailyaverage,
    totalCategorySpentMonth: categoryAmountSpentMonth.rows
  };

    return payload;
}

      
      module.exports = {amountSpentPerDayMonth}