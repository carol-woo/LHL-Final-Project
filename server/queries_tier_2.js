const Pool = require('pg').Pool
const pool = new Pool({
  user: 'budget',
  host: 'localhost',
  database: 'finalproject',
  password: 'expense',
  port: 5432,
})


const userVerification = async ( req, res) => {
 console.log(req.body)

  await pool.query(`
    SELECT * FROM users
    WHERE email=$1 AND password_digest=$2;`,[req.body.email, req.body.password], (error, result) => {
    if(error){
      throw error
    }
    if(result.rows.length === 1){
      console.log("200")
      res.status(200).json()
    } else {
      res.status(401).json()
    }
  });

//  if(isUser === true){
//    console.log("im true")
//  } else {

//  }
}

module.exports = {userVerification}