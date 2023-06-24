class Almacen {
  constructor() {
    this.productos = [];
  }
  agregarProductos(producto) {
    this.productos.push(producto);
  }
  buscarProductos(nombre) {
    return this.productos.filter((producto) => (producto.nombre = nombre));
  }
  productosDisponibles(stock) {
    return this.productos.filter((producto) => producto.stock >= 0);
  }
  get getLista() {
    return this.productos;
  }
}

const newAlmacen = new Almacen();

module.exports = newAlmacen;
