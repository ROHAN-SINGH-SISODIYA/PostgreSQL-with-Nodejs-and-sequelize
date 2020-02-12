require('dotenv').config();

module.exports={
  "development": {
    "username":process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect":process.env.DIALECT,
  },
  "test": {
    "username":process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database":'book_test',
    "host": process.env.DB_HOST,
    "dialect":process.env.DIALECT,
  }
}
