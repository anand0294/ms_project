const express = require("express")

const { checkHeartbeat,
    getAllProducts,
    getProductbyID,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct,
    deleteAllProduct } = require("../controllers/product");

const router = express.Router();


//GET Operations
router.get("/heartbeat", checkHeartbeat);

router.get("/products", getAllProducts);

router.get("/products/:productId", getProductbyID);

//POST Operations
router.post("/product", createProduct);

//PUT Operations
router.put("/products/:productId", replaceProduct);

//PATCH Operations
router.patch("/products/:productId", updateProduct);

//DELETE Operations
router.delete("/products/:productId", deleteProduct);

//DO NOT USE
router.delete("/products", deleteAllProduct);

exports.router = router;