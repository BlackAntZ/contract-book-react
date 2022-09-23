const mysql = require('mysql2/promise');

let pool;

async function connectToDatabase() {
  pool = mysql.createPool({
    host: 'localhost',
    database: 'knjiga_ugovora',
    user: 'root',
    password: 'hard1988'
  });
}

function getDb() {
  if (!pool) {
    throw new Error('You must connect first!');
  }

  return pool;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};