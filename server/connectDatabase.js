const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect('mongodb://0.0.0.0:27017/test-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con => console.log("Connected To DB", con.connection.host))
      .catch(err => {
        console.log(err)
        process.exit(1)
    });
}

module.exports = connectDatabase