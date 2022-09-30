const express = require ('express')
const router = express.Router()
const {addNewProduct, getAllProducts, getProductByCategory, getProductById, updateProductById, deleteProductById} = require('../controllers/products')


router.route('/addNewProduct/:userId').put(addNewProduct)
router.route('/getAllProducts').get(getAllProducts)
router.route('/getProductByCategory/:catId').get(getProductByCategory)
router.route('/getProductById/:productId').get(getProductById)
router.route('/updateProductById/:productId').put(updateProductById)
router.route('/deleteProductById/:productId').delete(deleteProductById)
module.exports = router