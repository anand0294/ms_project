const express = require("express");
const app = express();
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json"));

let products = data.products;

app.use(express.json());

//GET Operations
app.get("/heartbeat", (req, res) => {
    res.send("App is running fine !!");
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.get("/products/:productId", (req, res) => {
    const productId = Number(req.params.productId);
    const product = products.find((product) => product.id === productId) || {};
    if (product.id) {
        res.send(product);
    } else {
        res.status(404).send("Product not found !!");
    }
});

//POST Operations
app.post("/product", (req, res) => {
    products.push({ ...req.body, id: products.length + 1 });
    res.status(201).send("Successfully Added");
});

//PUT Operations
app.put("/products/:productId", (req, res) => {
    const productId = Number(req.params.productId);
    const productIdx = products.findIndex((product) => product.id === productId);
    products.splice(productIdx, 1, { ...req.body, id: productId });
    res.status(201).send("Successfully Updated !!");
});

//PATCH Operations
app.patch("/products/:productId", (req, res) => {
    const productId = Number(req.params.productId);
    const productIdx = products.findIndex((product) => product.id === productId);
    const product = products[productIdx];
    products.splice(productIdx, 1, { ...products, ...req.body});
    res.status(201).send("Successfully Updated !!");
});

//DELETE Operations
app.delete("/products/:productId", (req, res) => {
    const productId = Number(req.params.productId);
    const productIdx = products.findIndex((product) => product.id === productId);
    products.splice(productIdx, 1);
    res.status(201).json(product);
});

//DO NOT USE
app.delete("/products", (req, res) => {
    products = [];
    res.status(201).send("Alert !! Everything Deleted ");
});

app.listen(8080, () => {
    console.log("server is started.You can access on localhost:8080");
});
