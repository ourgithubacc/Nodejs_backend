const express = require('express')
const {handleWebhook} = require('../controllers/webhook')
const router = express.Router();


router.route('/webhook').post(handleWebhook);

module.exports = router