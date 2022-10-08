require('dotenv').config({ path: 'src/.env' })

module.exports = {
    connectionString: process.env.CONNECTION_STRING,
}