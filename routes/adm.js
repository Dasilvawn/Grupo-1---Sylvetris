const express = require("express");
const admController = require("../controllers/admController");
const router = express.Router();
const { store, edit, update, createProduct, getProducts, deleteProducts, passnot } = require("../controllers/admController");

const admPass = require('../middlewares/accessAdm')

/* /admin */
router.get("/createProduct", createProduct);
router.get("/products", getProducts);

router.get('/passnot', passnot);

/*** editar productos***/ 
router.get('/editProduct/:id', edit); 
router.put('/update/:id', update); 

/* Formulario de creación de productos */
router.post('/store', store); 

router.delete("/deleteProduct/:id", deleteProducts);

module.exports = router;
