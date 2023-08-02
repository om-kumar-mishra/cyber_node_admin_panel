
require('dotenv').config()

module.exports = {
    "development": {
      "username": "root",
      "password": "",
      "database": "cyber",
      "host": "localhost",
      "dialect":"mysql",       
        logging: false
      
    },
    "test": {
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": process.env.DATABASE_NAME,
      "host": process.env.HOSTNAME,
      "dialect":"mysql",
      logging: false
    },
    "production": {
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": process.env.DATABASE_NAME,
      "host": process.env.HOSTNAME,
      "dialect":"mysql",
      logging: false
    }
}
