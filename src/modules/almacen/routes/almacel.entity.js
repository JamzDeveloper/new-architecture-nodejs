const { Router } = require("express");
const almacenService = require("../services/almacen.service");

const routes = Router();

routes.get("/", almacenService.getAll);

module.exports = routes;
