const mongoose = require('mongoose');

exports.customers =  mongoose.model("customers" , {});

exports.transactions =  mongoose.model("transactions" , {});