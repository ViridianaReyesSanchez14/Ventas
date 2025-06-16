
import { obtenerProductos, actualizarStock, verificarStock } from './inventario.js';

function mostrarProductosVentas() {
    const productos = obtenerProductos();
    const selectProducto = document.getElementById('producto-venta');
    productos.forEach((producto) => {
        const option = document.createElement('option');
        option.value = producto.id;
        option.textContent = `${producto.nombre} - Stock: ${producto.stock} - Mínimo: ${producto.stockMinimo}`;
        selectProducto.appendChild(option);
    });
}

function realizarVenta() {
    const productoId = document.getElementById('producto-venta').value;
    const cantidad = parseInt(document.getElementById('cantidad-venta').value);
    const esCompra = false;

    if (verificarStock(productoId, cantidad, esCompra)) {
        actualizarStock(productoId, -cantidad);
        alert('Venta registrada exitosamente');
    } else {
        alert('No hay suficiente stock o el stock no permite la venta');
    }
}

window.onload = mostrarProductosVentas;
