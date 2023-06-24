const { Router } = require("express");
const ProductService = require("../services/product.service");

const routes = Router();
const productService = ProductService;

routes.get("/", productService.getListProduct);

routes.post("/create", productService.crear);

module.exports = routes;
