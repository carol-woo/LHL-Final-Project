// select budget, expenditure, (budget - expenditure) as balance from (select category_budget as budget, transactions.amount as expenditure
//   from categories
//   join transactions on categories.id = transactions.category_id) as difference


//   select users_budget, amount_spent, (users_budget - amount_spent) as balance from (select users.budget as users_budget, sum(transactions.amount) as amount_spent from transactions
// join users on users.id = transactions.user_id group by users.id) as total_expenditure