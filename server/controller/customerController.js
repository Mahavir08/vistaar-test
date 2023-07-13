const { transactions, customers } = require('../model/models');

exports.getCustomers =  async (req, res) => {
    try {
        const activeusers = await customers.find({ active: true }, { name: 1, address: 1, accounts: 1, _id: 0 });
        res.json({ activeusers });
    } catch (error) {
        console.log(error)
        res.json({ msg: 'Unknown Error! Please contact Administrator' });
    }
}

exports.getAccountDetails = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const transactionDetails = await transactions.find({ account_id: id }, { transactions: 1, _id: 0 });
        if (transactionDetails.length < 1) {
            res.json({ msg: 'No account details found, Please contact Administrator' });
        }
        else {
            const result = transactionDetails[0].toObject().transactions
            result.sort((a, b) => {
                return b.date - a.date;
            });
            res.send(result);
        }
    } catch (error) {
        console.log(error)
        res.json({ msg: 'Unknown Error! Please contact Administrator' });
    }
}