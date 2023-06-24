const express = require("express");
const users = require("../modules/user/routes/user.route");
const product = require("../modules/product/routes/product.route");
const almacen = require("../modules/almacen/routes/almacel.entity")
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.userPath = "/api/users";
    this.productPath = "/api/products";
    this.almacenPath ="/api/almacen"

    //middleare

    this.middleare();
    // rutas

    this.routes();
  }

  middleare() {
    //parse and reading of body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.userPath, users);
    this.app.use(this.productPath, product);
    this.app.use(this.almacenPath,almacen)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server escuchando en puerto ${this.port} 🚀🚀`);
    });
  }
}

module.exports = Server;
