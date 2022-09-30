const express = require('express')
const {payForTicket,payToAddProduct} = require('../controllers/pay')
const router = express.Router();


router.route('/payForTicket/:userId').post(payForTicket);
router.route('/payForProduct/:userId').post(payToAddProduct);
//router.route('/verifyPayment/:userId').get(verifyPayments)




module.exports = router