// carrito.js
//registro
document.addEventListener('DOMContentLoaded', function() {
    var btnRegistro = document.getElementById('btnRegistro');
    btnRegistro.addEventListener('click', function() {
        window.open('https://rgncertus.github.io/ENVIDIA/index2.html', '_blank');
    });
});

// Variables globales
let carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Función para añadir productos al carrito
function agregarAlCarrito(event) {
    const producto = event.target.closest('.producto');  // Obtener el producto clickeado
    const id = producto.getAttribute('data-id');
    const nombre = producto.getAttribute('data-nombre');
    const precio = parseFloat(producto.getAttribute('data-precio'));

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }

    // Actualizar el carrito visualmente
    actualizarCarrito();
}

// Función para actualizar la interfaz del carrito
function actualizarCarrito() {
    // Limpiar la lista actual
    listaCarrito.innerHTML = '';

    // Mostrar los productos del carrito
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.nombre} - $${item.precio} x ${item.cantidad}`;
        listaCarrito.appendChild(li);
    });

    // Actualizar el total
    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    totalCarrito.innerText = `Total: $${total.toFixed(2)}`;
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Añadir eventos
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', agregarAlCarrito);
});

vaciarCarritoBtn.addEventListener('click', vaciarCarrito);









// server.js (Node.js con Express)
const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'usuario',
    password: 'contraseña',
    database: 'basededatos'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

app.get('/buscar_producto', (req, res) => {
    const searchQuery = req.query.searchQuery;
    if (searchQuery) {
        const query = `SELECT name FROM products WHERE name LIKE ? LIMIT 10`;
        db.query(query, [`%${searchQuery}%`], (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } else {
        res.json([]);
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

