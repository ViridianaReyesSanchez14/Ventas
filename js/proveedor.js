
import { obtenerProductos, actualizarStock, verificarStock } from './inventario.js';

function mostrarProductosProveedor() {
    const productos = obtenerProductos();
    const selectProducto = document.getElementById('producto-proveedor');
    productos.forEach((producto) => {
        const option = document.createElement('option');
        option.value = producto.id;
        option.textContent = `${producto.nombre} - Stock: ${producto.stock} - Maximo: ${producto.stockMaximo}`;
        selectProducto.appendChild(option);
    });
}

function registrarCompra() {
    const productoId = document.getElementById('producto-proveedor').value;
    const cantidad = parseInt(document.getElementById('cantidad-proveedor').value);
    const esCompra = true;

    if (verificarStock(productoId, cantidad, esCompra)) {
        actualizarStock(productoId, cantidad);
        alert('Compra registrada exitosamente');
    } else {
        alert('No puedes exceder el stock máximo');
    }
}

window.onload = mostrarProductosProveedor;
