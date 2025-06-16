
const productos = [
    { id: 1, nombre: 'Lápiz', stock: 100, stockMaximo: 200, stockMinimo: 10, precio: 10 },
    { id: 2, nombre: 'Cuaderno', stock: 50, stockMaximo: 100, stockMinimo: 5, precio: 30 },
    { id: 3, nombre: 'Goma', stock: 200, stockMaximo: 300, stockMinimo: 20, precio: 5 },
];

function obtenerProductos() {
    return productos;
}

function actualizarStock(id, cantidad) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        producto.stock += cantidad;
    }
}

function verificarStock(id, cantidad, esCompra) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return false;

    if (esCompra) {
        return producto.stock + cantidad <= producto.stockMaximo;
    } else {
        return producto.stock - cantidad >= producto.stockMinimo;
    }
}

export { obtenerProductos, actualizarStock, verificarStock };
