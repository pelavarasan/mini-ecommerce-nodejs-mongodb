const mongoose = require('mongoose');
const connectDatabase = () =>{
 

   mongoose.connect(process.env.DB_URL)
  .then((con) => console.log('✅ MongoDB connected',con.connection.host))
  .catch(err => console.error('❌ Connection error:', err));

}

module.exports = connectDatabase; 