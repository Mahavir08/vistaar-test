const express = require('express');
const router = express.Router();
const {getCustomers, getAccountDetails} = require('../controller/customerController');

router.route('/').get(getCustomers);

router.route('/account/:id').get(getAccountDetails);

module.exports = router;