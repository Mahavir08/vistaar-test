const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDatabase = require('./connectDatabase');
const customers = require('./routes/customerRoutes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use('/', customers);

connectDatabase();

app.listen(8000, () => console.log('Connect To Port 8000'));